import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out = path.join(root, 'dist');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, 'assets', 'css'), { recursive: true });
fs.mkdirSync(path.join(out, 'assets', 'js'), { recursive: true });

const files = [
  ['index.html', 'index.html'],
  ['manifest.webmanifest', 'manifest.webmanifest'],
  ['assets/css/styles.css', 'assets/css/styles.css'],
  ['assets/js/app.js', 'assets/js/app.js'],
];
for (const [source, dest] of files) {
  const from = path.join(root, source);
  const to = path.join(out, dest);
  if (!fs.existsSync(from)) throw new Error(`Missing required app file: ${source}`);
  fs.copyFileSync(from, to);
}
console.log(`Built static app into ${path.relative(root, out)} (${files.length} runtime files).`);
