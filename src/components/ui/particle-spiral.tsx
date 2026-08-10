// Deterministic phyllotaxis particle field — the hero's signature swirl.
// Grouped into concentric rings that rotate at different speeds/directions for a parallax vortex.
const GOLDEN_ANGLE = 137.5077640500378 * (Math.PI / 180)
const COUNT = 1100 // Increased to make the particle density richer
const SCALE = 12.5  // Adjusted to expand the coverage area naturally

type Dot = {
    x: number
    y: number
    size: number
    opacity: number
    rot: number
    r: number // radius to determine layer grouping
}

function buildDots(): Dot[] {
    const dots: Dot[] = []
    for (let i = 0; i < COUNT; i++) {
        const r = SCALE * Math.sqrt(i)
        const theta = i * GOLDEN_ANGLE
        const x = r * Math.cos(theta)
        const y = r * Math.sin(theta)
        // Fade + shrink toward the dense center, keep the outer ring sparse-looking.
        const t = i / COUNT
        const size = 0.8 + ((i * 37) % 5) * 0.6 * (0.3 + t)
        const opacity = 0.05 + t * 0.55
        const rot = (i * 63) % 90
        dots.push({ x, y, size, opacity, rot, r })
    }
    return dots
}

const DOTS = buildDots()

// Group dots into 4 concentric layers based on radius
const layer1 = DOTS.filter((d) => d.r < 100)
const layer2 = DOTS.filter((d) => d.r >= 100 && d.r < 210)
const layer3 = DOTS.filter((d) => d.r >= 210 && d.r < 320)
const layer4 = DOTS.filter((d) => d.r >= 320)

export function ParticleSpiral({ className }: { className?: string }) {
    return (
        <div className={className} aria-hidden="true">
            <svg
                viewBox="-450 -450 900 900"
                className="h-full w-full overflow-visible"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* SVG Style sheet containing performance-optimized animations rotating around coordinate (0,0) */}
                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes spin-cw-fast {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    @keyframes spin-ccw-medium {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(-360deg); }
                    }
                    @keyframes spin-cw-slow {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    @keyframes spin-ccw-sluggish {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(-360deg); }
                    }

                    .spiral-layer-1 {
                        animation: spin-cw-fast 40s linear infinite;
                        transform-origin: 0px 0px;
                    }
                    .spiral-layer-2 {
                        animation: spin-ccw-medium 70s linear infinite;
                        transform-origin: 0px 0px;
                    }
                    .spiral-layer-3 {
                        animation: spin-cw-slow 110s linear infinite;
                        transform-origin: 0px 0px;
                    }
                    .spiral-layer-4 {
                        animation: spin-ccw-sluggish 160s linear infinite;
                        transform-origin: 0px 0px;
                    }
                `}} />

                {/* Layer 1 (Innermost) */}
                <g className="spiral-layer-1">
                    {layer1.map((d, i) => (
                        <rect
                            key={`l1-${i}`}
                            x={d.x - d.size / 2}
                            y={d.y - d.size / 2}
                            width={d.size}
                            height={d.size}
                            fill="currentColor"
                            opacity={d.opacity}
                            transform={`rotate(${d.rot} ${d.x} ${d.y})`}
                        />
                    ))}
                </g>

                {/* Layer 2 */}
                <g className="spiral-layer-2">
                    {layer2.map((d, i) => (
                        <rect
                            key={`l2-${i}`}
                            x={d.x - d.size / 2}
                            y={d.y - d.size / 2}
                            width={d.size}
                            height={d.size}
                            fill="currentColor"
                            opacity={d.opacity}
                            transform={`rotate(${d.rot} ${d.x} ${d.y})`}
                        />
                    ))}
                </g>

                {/* Layer 3 */}
                <g className="spiral-layer-3">
                    {layer3.map((d, i) => (
                        <rect
                            key={`l3-${i}`}
                            x={d.x - d.size / 2}
                            y={d.y - d.size / 2}
                            width={d.size}
                            height={d.size}
                            fill="currentColor"
                            opacity={d.opacity}
                            transform={`rotate(${d.rot} ${d.x} ${d.y})`}
                        />
                    ))}
                </g>

                {/* Layer 4 (Outermost) */}
                <g className="spiral-layer-4">
                    {layer4.map((d, i) => (
                        <rect
                            key={`l4-${i}`}
                            x={d.x - d.size / 2}
                            y={d.y - d.size / 2}
                            width={d.size}
                            height={d.size}
                            fill="currentColor"
                            opacity={d.opacity}
                            transform={`rotate(${d.rot} ${d.x} ${d.y})`}
                        />
                    ))}
                </g>
            </svg>
        </div>
    )
}