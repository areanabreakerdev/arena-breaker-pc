# Arena Breaker

A 3-minute free-for-all 3D shooter with full rigid-body physics, built with Three.js (rendering), cannon-es (physics) and Electron (Windows .exe).

## Build the .exe (on a Windows PC)

```
npm install
npm run build
```

The game is created at `dist\ArenaBreaker-win32-x64\ArenaBreaker.exe`. To play without building: `npm start`.
(In PowerShell, use `npm.cmd` instead of `npm` if scripts are blocked.)

## Game mode

You and 7 bots fight for 3 minutes. Most kills wins. Everyone respawns 3 seconds after dying (with brief spawn protection). Each fighter has its own avatar, colours, hat and name tag, shown on the live leaderboard and in the kill feed.

Bots fight EACH OTHER: each bot targets the closest fighter it can see, whether that is you or another bot, and takes revenge on whoever hurt it. Low-health bots run for health packs.

## Controls

| Key | Action |
| --- | --- |
| W A S D | Move |
| Shift | Sprint |
| Space | Jump |
| C | Slide (while running; S cancels it) |
| Space during a slide | Slide jump: leap with extra momentum |
| Mouse | Aim |
| Left click | Fire |
| Right click | Aim down sights |
| R | Reload |
| G | Throw grenade |
| F3 | FPS + debug readout (speed, ground, keys the game thinks are held) |
| F11 / F12 | Fullscreen / developer console |
| Esc | Pause |

## Mechanics

- **Ballistics**: real projectiles with travel time and bullet drop; recoil and spread that grows when you move or hold fire.
- **Sliding**: slide keeps your momentum, lowers your camera, makes you a harder target, and a slide jump carries speed through the air.
- **Pickups**: green cross = +40 HP, yellow box = ammo and grenades. They respawn after 18 seconds. Bots use health packs too.
- **Kill rewards**: each kill heals 15 HP. Multi-kills and kill streaks get announcements. Health also regenerates slowly if you avoid damage for 6 seconds.
- **Physics**: crates stack and shatter, barrels chain-explode, grenades bounce, and every fighter dies into a constraint-based ragdoll.
- **Damage arrows**: a red arrow shows which direction you were hit from.

## Tweaking (top of `game.js`)

`ROUND_TIME`, `RESPAWN_TIME`, `BOB_STRENGTH` (1 = medium view bob), `SLIDE_TIME`, and the bot list in `ROSTER_DEF` (names, avatars, colours, skill).

## Maps (picked before every match)

Click a card or press 1 / 2 / 3 on the start screen. Your last choice is remembered.

1. **Concrete Yard** - open daylight arena, scattered cover, crates and barrels.
2. **Sunset Docks** - shipping-container lanes and alleys, close quarters, many barrels.
3. **Frozen Ruins** - snowy mist, a walled fort with four gates, pillars and low walls to jump on.

Each match builds a fresh random layout of the chosen map.

## Weapons & loadout
Pick Primary (Assault Rifle, SMG, Shotgun, Sniper), Secondary (Pistol, Revolver) and Melee (Katana, Combat Knife) in the start menu, plus bot difficulty (Easy/Normal/Hard), match length, name/avatar, mouse sensitivity and view bob.
In match: 1/2/3 or mouse wheel to switch, Q quick-swap, R reload, left click fires or swings, right click aims (sniper uses a scope).

## Online play (PC + phone)
Every time you open the game a 6-character code is shown in the ONLINE box. Give it to a friend, or type a friend's code and press JOIN.
The person whose code is used is the host; everyone presses START in their own menu. Needs internet. Players only (no bots) in online matches. After it, run `npm.cmd install` once to get the online library.

## New menu (home screen)

PLAY starts or resumes. LOADOUT opens the gun screen: pick Primary / Secondary / Melee, then use the SKINS and WRAPS buttons for the gun you picked. CONTROLS lists every key and lets you rebind them (click a key box, press the new key; RESET TO DEFAULT puts them back). ONLINE has your room code and the join box. SETTINGS has name, avatar, difficulty, match length, sensitivity, view bob and crosshair colour.

## v2.0 - The Breaker Update

New map (Neon Factory), career levels and ranks, stats, 18 achievements, weapon mastery, solo kill limit, FOV and volume sliders, and an in-game Update Log. Full history in CHANGELOG.md.
