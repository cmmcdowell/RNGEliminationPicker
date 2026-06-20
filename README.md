# Elimination Arena

A Vercel-ready static app for randomly eliminating player numbers without replacement.

## Performance-focused version

This build is tuned for smoother live displays:

- Visual effects default to **Performance - fastest**.
- The old heavy DOM confetti was replaced with lightweight canvas particles that only run in Balanced or Showtime mode.
- Continuous full-screen animations were removed.
- The remaining list is hidden by default and its preview is capped.
- The elimination history preview is capped.
- The main stage caps very large draw displays and shows a `+ more` card instead of creating hundreds of large elements.
- The picker uses an efficient draw strategy and keeps the remaining pool in its original visible order.
- The player pool is capped at 50,000 unique numbers to avoid browser freezes.

## Deploy on Vercel

Push this folder to the repository connected to Vercel. Vercel will run:

```bash
npm run build
```

The build copies `src/index.html` to `dist/index.html`, which Vercel serves as the app.

## Local preview

```bash
npm install
npm run build
npm start
```

Then open `http://localhost:3000`.

## How the draw works

1. The app parses your input into a unique list of numbers.
2. Each draw selects only from the current remaining pool.
3. For small draws, it randomly chooses unique indexes from the pool.
4. For larger draws, it uses a partial Fisher-Yates style shuffle so it does not repeatedly collide on already-picked indexes.
5. Selected numbers are added to the eliminated list.
6. Remaining numbers are rebuilt by filtering out those selected indexes, so eliminated numbers cannot appear again unless you reset the list.

The random index uses the browser's `crypto.getRandomValues()` when available, with rejection sampling to avoid modulo bias. If that API is unavailable, it falls back to `Math.random()`.
