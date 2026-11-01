// Packages the game into a Windows executable: dist/ArenaBreaker-win32-x64/ArenaBreaker.exe
const path = require('path');
const mod = require('@electron/packager');
const packager = mod.packager || mod.default || mod;

packager({
  dir: __dirname,
  out: path.join(__dirname, 'dist'),
  name: 'ArenaBreaker',
  platform: 'win32',
  arch: 'x64',
  overwrite: true,
  prune: true,
  ignore: [/^\/dist($|\/)/, /^\/README\.md$/, /^\/build\.js$/],
})
  .then((paths) => {
    console.log('\nBuilt:\n' + paths.join('\n'));
    console.log('\nRun ArenaBreaker.exe inside that folder.');
  })
  .catch((err) => {
    console.error('Build failed:', err);
    process.exit(1);
  });
