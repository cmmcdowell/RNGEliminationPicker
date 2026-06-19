# Elimination Number Draw

A static, browser-only elimination draw app for games. Enter player numbers, choose how many to eliminate, and draw without replacement. Eliminated numbers are removed from the remaining pool so they cannot be picked again until the list is reset.

## Features

- Supports ranges such as `1 - 100`
- Supports comma-separated lists such as `1, 3, 5, 7`
- Supports mixed input such as `10-20, 42, 99`
- Configurable number of players to eliminate per draw
- Large participant-facing eliminated-number display
- Remaining-player count, elimination history, and browser-saved state
- Sad mode toggle for muted eliminations with no confetti
- No backend, database, accounts, or external dependencies

## Vercel deployment

This repo is ready for Vercel.

- Framework preset: Other
- Build command: `npm run build`
- Output directory: `dist`

These are also set in `vercel.json`, so Vercel should pick them up automatically from the repository.

## Local usage

```bash
npm run start
```

Then open the local URL printed in the terminal.

To test the production build locally:

```bash
npm run build
```

The generated static site will be in `dist/`.
