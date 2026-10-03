import { Check } from 'lucide-react'

const models = [
    {
        name: 'Project',
        marker: 'I',
        tagline: 'Fixed scope, fixed price.',
        badge: 'Scoped Deliverable',
        description:
            'A bounded RAG pipeline build, an agentic AI integration, custom backend infrastructure, or a pre-launch reliability audit.',
        items: [
            'RAG pipeline architecture & build',
            'Agentic tool-calling & workflow integration',
            'Production backend & vector database setup',
            'Pre-launch latency & hallucination audit',
        ],
        cta: 'Discuss a project',
        featured: false,
    },
    {
        name: 'Retainer',
        marker: 'II',
        tagline: 'Ongoing engineering partnership.',
        badge: 'Ongoing Scale',
        description:
            'Dedicated technical leadership, continuous feature delivery, architecture reviews, and mentorship for your internal team.',
        items: [
            'Continuous feature shipping & optimization',
            'Architecture & system reviews',
            'Engineering mentorship & best practices',
            'Priority turnaround & dedicated capacity',
        ],
        cta: 'Book ongoing capacity',
        featured: true,
    },
]

export default function Engagement() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-dark py-28 text-dark-foreground md:py-36 border-b border-dark-border"
        >
            {/* Subtle ambient gradient & depth */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(248, 248, 246, 0.08), transparent 70%)',
                }}
            />

            <div className="relative mx-auto max-w-6xl px-6">
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-dark-foreground" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-dark-muted">
                        How I Work With Teams
                    </span>
                </div>

                <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-tight md:text-6xl">
                        Two ways
                        <br />
                        to engage.
                    </h2>
                    <p className="max-w-md text-pretty leading-relaxed text-dark-muted">
                        Pick the shape that fits your roadmap — a bounded build with a clear
                        deliverable, or a dedicated engineering partnership for teams shipping
                        continuously.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {models.map((model) => (
                        <div
                            key={model.name}
                            className={`relative flex flex-col rounded-2xl border p-8 md:p-10 transition-all duration-300 ${
                                model.featured
                                    ? 'border-dark-foreground/35 bg-white/[0.06] shadow-xl hover:border-dark-foreground/50 hover:bg-white/[0.08]'
                                    : 'border-dark-border bg-white/[0.02] hover:border-dark-foreground/25 hover:bg-white/[0.04]'
                            }`}
                        >
                            {/* Subtle luminous highlight for featured card */}
                            {model.featured && (
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-dark-foreground/60 to-transparent"
                                />
                            )}

                            <div className="flex items-center justify-between">
                                <div className="flex items-baseline gap-3">
                                    <span className="font-mono text-sm text-dark-muted">
                                        {model.marker}
                                    </span>
                                    <h3 className="text-2xl font-medium tracking-tight text-dark-foreground md:text-3xl">
                                        {model.name}
                                    </h3>
                                </div>
                                <span
                                    className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${
                                        model.featured
                                            ? 'border border-dark-foreground/30 bg-dark-foreground/10 text-dark-foreground font-medium'
                                            : 'border border-dark-border bg-dark/60 text-dark-muted'
                                    }`}
                                >
                                    {model.badge}
                                </span>
                            </div>

                            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-dark-foreground/90">
                                {model.tagline}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-dark-muted">
                                {model.description}
                            </p>

                            <ul className="mt-8 flex flex-1 flex-col gap-3.5 border-t border-dark-border pt-8">
                                {model.items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-dark-foreground/90"
                                    >
                                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-dark-foreground/10 text-dark-foreground">
                                            <Check className="h-2.5 w-2.5" />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`mt-10 rounded-full px-6 py-3.5 text-center text-sm font-medium transition-all ${
                                    model.featured
                                        ? 'bg-dark-foreground text-dark hover:opacity-90 shadow-sm'
                                        : 'border border-dark-border text-dark-foreground hover:bg-dark-foreground/10'
                                }`}
                            >
                                {model.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}