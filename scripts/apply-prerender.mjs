/**
 * Runs after every `vite build` (local and Render alike). Pure fs/string work,
 * no browser/renderer — safe to run in CI. Splices committed prerender-snapshots/*.json
 * (head + body captured by scripts/capture-snapshots.tsx) into the just-built dist/index.html
 * template, so each snapshot's <script>/<link> asset tags always match the current build's
 * hashed filenames.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const snapshotsDir = path.join(root, 'prerender-snapshots');

const templatePath = path.join(distDir, 'index.html');
if (!existsSync(templatePath)) {
    throw new Error(`${templatePath} not found — run vite build first`);
}
if (!existsSync(snapshotsDir)) {
    console.log('No prerender-snapshots/ directory — skipping prerender step.');
    process.exit(0);
}

const template = readFileSync(templatePath, 'utf-8');
const snapshotFiles = readdirSync(snapshotsDir).filter((f) => f.endsWith('.json'));

for (const file of snapshotFiles) {
    const { route, head, body } = JSON.parse(readFileSync(path.join(snapshotsDir, file), 'utf-8'));

    if (!template.includes('<div id="root"></div>')) {
        throw new Error(`dist/index.html does not contain the expected '<div id="root"></div>' placeholder`);
    }

    const html = template
        .replace('</head>', `${head}</head>`)
        .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

    const outDir = path.join(distDir, route.replace(/^\//, ''));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, 'index.html'), html);
    console.log(`Prerendered ${route} -> dist${route}/index.html`);
}
