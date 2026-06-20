import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const source = resolve(root, "src", "index.html");
const outputDir = resolve(root, "dist");
const output = resolve(outputDir, "index.html");

await mkdir(outputDir, { recursive: true });
await copyFile(source, output);
console.log(`Built ${output}`);
