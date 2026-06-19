import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const srcDir = join(root, "src");
const distDir = join(root, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await copyFile(join(srcDir, "index.html"), join(distDir, "index.html"));

// Use the same page for unknown routes so the deployed app has a friendly fallback.
await copyFile(join(srcDir, "index.html"), join(distDir, "404.html"));

await writeFile(
  join(distDir, "robots.txt"),
  "User-agent: *\nAllow: /\n",
  "utf8"
);

console.log("Built static app in dist/");
