import { Check } from 'lucide-react'

const models = [
    {
        name: 'Project',
        marker: 'I',
        tagline: 'Fixed scope, fixed price.',
        description:
            'A RAG pipeline build, an AI feature integration, a backend system, or a pre-launch audit of an existing AI system.',
        items: [
            'RAG pipeline design & build',
            'LLM / AI feature integration',
            'Backend systems & APIs',
            'Pre-launch AI system audit',
        ],
        featured: false,
    },
    {
        name: 'Retainer',
        marker: 'II',
        tagline: 'Ongoing monthly engagement.',
        description:
            'For teams shipping continuously, including technical oversight and mentorship for junior engineers.',
        items: [
            'Continuous feature development',
            'Architecture & code review',
            'Technical mentorship',
            'Priority turnaround',
        ],
        featured: true,
    },
]

export default function Engagement() {
    return (
        <section
            id="services"
            className="bg-dark py-28 text-dark-foreground md:py-36"
        >
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-dark-foreground" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-dark-muted">
                        How We&apos;d Work Together
                    </span>
                </div>
                <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-tight md:text-6xl">
                        Two ways
                        <br />
                        to engage.
                    </h2>
                    <p className="max-w-md text-pretty leading-relaxed text-dark-muted">
                        Pick the shape that fits the work — a bounded build with a clear
                        deliverable, or an ongoing partnership for teams shipping
                        continuously.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2">
                    {models.map((model) => (
                        <div
                            key={model.name}
                            className={`flex flex-col rounded-xl border p-8 md:p-10 ${model.featured
                                ? 'border-dark-foreground/40 bg-dark-foreground text-dark'
                                : 'border-dark-border bg-transparent text-dark-foreground'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-baseline gap-3">
                                    <span
                                        className={`font-mono text-sm ${model.featured ? 'text-dark/50' : 'text-dark-muted'
                                            }`}
                                    >
                                        {model.marker}
                                    </span>
                                    <h3 className="text-2xl font-medium tracking-tight">
                                        {model.name}
                                    </h3>
                                </div>
                                {model.featured && (
                                    <span className="rounded-full bg-dark px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-dark-foreground">
                                        Most popular
                                    </span>
                                )}
                            </div>

                            <p className="mt-4 text-sm font-medium">{model.tagline}</p>
                            <p
                                className={`mt-2 text-sm leading-relaxed ${model.featured ? 'text-dark/70' : 'text-dark-muted'
                                    }`}
                            >
                                {model.description}
                            </p>

                            <ul
                                className={`mt-8 flex flex-1 flex-col gap-4 border-t pt-8 ${model.featured ? 'border-dark/15' : 'border-dark-border'
                                    }`}
                            >
                                {model.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm">
                                        <Check
                                            className={`mt-0.5 h-4 w-4 shrink-0 ${model.featured ? 'text-dark' : 'text-dark-foreground'
                                                }`}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`mt-10 rounded-full px-5 py-3.5 text-center text-sm font-medium transition-opacity hover:opacity-90 ${model.featured
                                    ? 'bg-dark text-dark-foreground'
                                    : 'border border-dark-border text-dark-foreground hover:bg-dark-foreground/5'
                                    }`}
                            >
                                Get in touch
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}