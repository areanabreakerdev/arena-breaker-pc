const { app, BrowserWindow, Menu, session } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    show: false,
    autoHideMenuBar: true,
    title: 'Arena Breaker',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      backgroundThrottling: false,
    },
  });

  win.once('ready-to-show', () => {
    win.maximize();
    win.show();
  });

  // If the page fails to load, show why instead of a blank window
  win.webContents.on('did-fail-load', (_e, code, desc, url) => {
    win.webContents.executeJavaScript(
      `document.body.style.cssText='background:#111;color:#fff;font:16px monospace;padding:20px';` +
        `document.body.innerText=${JSON.stringify('Load failed: ' + desc + ' (' + code + ')\n' + url)}`
    ).catch(() => {});
  });

  win.webContents.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
      event.preventDefault();
    } else if (input.key === 'F12') {
      win.webContents.toggleDevTools(); // debugging console
      event.preventDefault();
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  // allow the microphone for voice chat
  session.defaultSession.setPermissionRequestHandler((_wc, permission, cb) => cb(permission === 'media' || permission === 'audioCapture' || permission === 'fullscreen' || permission === 'pointerLock'));
  session.defaultSession.setPermissionCheckHandler(() => true);
  Menu.setApplicationMenu(null);
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => app.quit());
