/**
 * Local/manual step — NOT run during the Render build.
 * Renders each non-root route via react-dom/server and writes a { route, head, body }
 * snapshot to prerender-snapshots/*.json. Re-run (`npm run snapshot`) and commit the
 * diff whenever Services/Portfolio/case-study copy changes.
 */
import { renderToStaticMarkup } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter, Routes, Route } from 'react-router-dom';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Services from '../src/pages/services';
import Portfolio from '../src/pages/portfolio';
import CaseStudy from '../src/pages/case-study';
import { caseStudies } from '../src/data/case-studies';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'prerender-snapshots');
mkdirSync(outDir, { recursive: true });

interface RouteToCapture {
    key: string;
    route: string;
    pattern: string;
    element: React.ReactElement;
    expectedMarker: string;
}

const routes: RouteToCapture[] = [
    { key: 'services', route: '/services', pattern: '/services', element: <Services />, expectedMarker: 'Services' },
    { key: 'portfolio', route: '/portfolio', pattern: '/portfolio', element: <Portfolio />, expectedMarker: 'Selected Work' },
    ...caseStudies.map((cs) => ({
        key: `work-${cs.slug}`,
        route: `/work/${cs.slug}`,
        pattern: '/work/:slug',
        element: <CaseStudy />,
        expectedMarker: cs.title,
    })),
];

let failures = 0;
const captured: { key: string; route: string; head: string; body: string }[] = [];

for (const { key, route, pattern, element, expectedMarker } of routes) {
    const html = renderToStaticMarkup(
        <HelmetProvider>
            <StaticRouter location={route}>
                <Routes>
                    <Route path={pattern} element={element} />
                </Routes>
            </StaticRouter>
        </HelmetProvider>,
    );

    const mainIdx = html.indexOf('<main');
    if (mainIdx === -1) {
        console.error(`[FAIL] ${route}: no <main> found in rendered output`);
        failures++;
        continue;
    }

    const head = html.slice(0, mainIdx);
    const body = html.slice(mainIdx);

    if (!body.includes(expectedMarker)) {
        console.error(`[FAIL] ${route}: rendered body did not contain expected marker "${expectedMarker}" (likely mis-resolved route/slug)`);
        failures++;
        continue;
    }

    captured.push({ key, route, head, body });
    console.log(`[ok] ${route}`);
}

if (failures > 0) {
    console.error(`\n${failures} route(s) failed to capture — not writing a partial snapshot set.`);
    process.exit(1);
}

for (const { key, route, head, body } of captured) {
    writeFileSync(path.join(outDir, `${key}.json`), JSON.stringify({ route, head, body }, null, 2));
}
console.log(`\nWrote ${captured.length} snapshot(s) to prerender-snapshots/`);
