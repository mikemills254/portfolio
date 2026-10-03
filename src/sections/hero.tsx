import {
    ArrowRight,
    Terminal,
    CheckCircle2,
    ShieldCheck,
    Database,
    Cpu,
} from 'lucide-react'
import { ParticleSpiral } from '../components/ui/particle-spiral'

const SIGNAL = [
    {
        title: 'Grounded by default',
        tag: 'DETERMINISTIC RETRIEVAL',
        description: "Every answer traces back to a retrieved source, not a model's guess.",
    },
    {
        title: 'Proven in production',
        tag: 'OGP-RECOGNIZED',
        description: "~50% faster builds via a reusable RAG pipeline, and OGP-recognized for Machakos County's AI-powered budget platform.",
    },
    {
        title: 'Built for adoption',
        tag: 'OFFLINE PWA',
        description: 'Shipped as an installable, offline-capable PWA — not just demoed and forgotten.',
    },
]

const TECH = [
    'TypeScript',
    'Node.js',
    'LangChain',
    'Agentic Workflows',
    'Vector Search',
    'Pinecone',
    'Weaviate',
    'OpenAI / GPT-4',
    'PostgreSQL',
    'AWS',
    'Docker',
    'React',
]

export default function Hero() {
    return (
        <section
            id="top"
            className="relative overflow-hidden border-b border-border"
        >
            {/* faint vertical grid lines */}
            <div
                aria-hidden="true"
                className="grid-lines pointer-events-none absolute inset-0 opacity-60"
            />

            {/* particle spiral, top-right */}
            <ParticleSpiral className="pointer-events-none absolute -right-48 -top-32 h-262.5 w-262.5 text-foreground/75 md:-right-16 lg:h-300 lg:w-300" />

            <div className="relative mx-auto max-w-6xl px-6 pt-32 md:pt-40">
                {/* Top Section: Split Hero (Headline on Left, Runtime Representation on Right) */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
                    {/* Left Column: Eyebrow, H1, Description, Actions */}
                    <div className="flex flex-col lg:col-span-6 xl:col-span-7">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-foreground" />
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                AI &amp; RAG Engineer — Nairobi, Kenya
                            </span>
                        </div>

                        <h1 className="mt-6 text-balance text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
                            AI systems
                            <br />
                            that <span className="text-muted-foreground">ship.</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                            RAG and agentic AI engineering for teams who need it to work in
                            production, not just in a demo. Based in Nairobi, working across
                            East Africa and remote.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                            >
                                Book a Strategy Call
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href="#work"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                            >
                                Explore Selected Work
                            </a>
                        </div>

                        {/* Quick Trust Badges */}
                        <div className="mt-10 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                100% Grounded Traceability
                            </span>
                            <span className="text-border">•</span>
                            <span className="inline-flex items-center gap-1.5">
                                <ShieldCheck className="h-3.5 w-3.5 text-foreground" />
                                OGP Civic AI Platform
                            </span>
                            <span className="text-border">•</span>
                            <span className="inline-flex items-center gap-1.5">
                                <Cpu className="h-3.5 w-3.5 text-foreground" />
                                ~50% Faster Pipeline Builds
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Architectural Runtime Representation (Pure Visual, No Buttons/CTAs) */}
                    <div className="flex flex-col lg:col-span-6 xl:col-span-5">
                        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-foreground/30 hover:shadow-md">
                            {/* Window / System Header */}
                            <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-border/80" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-border/80" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-border/80" />
                                    </div>
                                    <span className="mx-1 h-3 w-px bg-border" />
                                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                                        <Terminal className="h-3.5 w-3.5 text-foreground" />
                                        <span>rag_pipeline.trace</span>
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Production Active
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="flex flex-col p-4 sm:p-5 space-y-4">
                                {/* Top Label */}
                                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                    <span>Grounded Pipeline Execution</span>
                                    <span className="rounded bg-secondary/70 px-2 py-0.5 font-mono text-[9px] text-muted-foreground">
                                        Deterministic Spec
                                    </span>
                                </div>

                                <div className="space-y-3.5">
                                    {/* User Query Block */}
                                    <div className="rounded-xl border border-border bg-background/60 p-3.5 space-y-1">
                                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                                            <span className="text-foreground font-semibold">&gt;</span>
                                            <span>User Query</span>
                                        </div>
                                        <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                                            &ldquo;Verify vendor SLA commitments and data residency compliance.&rdquo;
                                        </p>
                                    </div>

                                    {/* Step 1: Retrieval */}
                                    <div className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-secondary/30 p-2.5 text-xs font-mono">
                                        <Database className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                                        <div className="space-y-0.5 min-w-0">
                                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                                Vector Search
                                            </div>
                                            <p className="truncate text-foreground text-[11px]">
                                                2 vector chunks + hybrid keyword boost (top-k=2)
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 2: Guardrails */}
                                    <div className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-secondary/30 p-2.5 text-xs font-mono">
                                        <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                                        <div className="space-y-0.5 min-w-0">
                                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                                Guardrail &amp; Grounding Check
                                            </div>
                                            <p className="truncate text-foreground text-[11px]">
                                                Strict Context Match: Passed · No External Drift
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3: Verified Answer */}
                                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-600 font-medium">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                                Grounded Output
                                            </span>
                                            <span className="rounded bg-background border border-border px-2 py-0.5 font-mono text-[9px] text-muted-foreground">
                                                Vendor_MSA_2024_Addendum.pdf §8.1
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                                            Section 8.1 mandates 99.9% uptime with strictly in-region EU/EEA storage.
                                        </p>
                                    </div>
                                </div>

                                {/* Runtime Telemetry Footer (Pure metrics, no buttons or CTAs) */}
                                <div className="flex items-center justify-between border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <span>Latency:</span>
                                        <strong className="text-foreground font-semibold">
                                            194ms
                                        </strong>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span>Grounded:</span>
                                        <strong className="text-emerald-600 font-semibold">
                                            100%
                                        </strong>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span>Hallucination:</span>
                                        <strong className="text-foreground font-semibold">
                                            0.0%
                                        </strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: 3 Architecture Guarantees in 3-Column Row */}
                <div className="mt-20 border-t border-border pt-12 md:mt-24">
                    <div className="flex items-center gap-2 mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Production Architecture Guarantees
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
                        {SIGNAL.map((item, i) => (
                            <div
                                key={item.title}
                                className="group/item flex flex-col justify-between space-y-4 rounded-xl border border-border bg-card/40 p-6 transition-all hover:border-foreground/30 hover:bg-card"
                            >
                                <div className="flex items-center justify-between border-b border-border/80 pb-3">
                                    <span className="font-mono text-sm font-semibold text-foreground">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    {item.tag && (
                                        <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                                            {item.tag}
                                        </span>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium tracking-tight text-foreground md:text-xl">
                                        {item.title}
                                    </h3>
                                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Marquee */}
                <div className="marquee-mask mt-14 overflow-hidden border-t border-border py-6">
                    <div className="animate-marquee flex w-max items-center gap-3">
                        {[...TECH, ...TECH].map((tech, i) => (
                            <span
                                key={i}
                                className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
