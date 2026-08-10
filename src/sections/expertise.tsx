const areas = [
    {
        title: 'Retrieval-Augmented Generation',
        description:
            'Production RAG pipelines end to end — document ingestion, chunking, embedding, vector retrieval, and guardrails — not just a prototype that works in a demo.',
    },
    {
        title: 'Agentic AI & LLM Integration',
        description:
            'Tool-calling agents, multi-step reasoning, and LLM integrations built for production: reliability, latency, and cost economics, not just capability.',
    },
    {
        title: 'Backend & API Development',
        description:
            'Node.js and TypeScript services, microservices architecture, and authentication systems built to hold up under real traffic.',
    },
    {
        title: 'Cloud & Deployment',
        description:
            'AWS and Azure deployments, Docker, and CI/CD — pragmatic infrastructure that balances performance with operational overhead.',
    },
    {
        title: 'Full Stack Development',
        description:
            'Delivering polished, complete products. From robust backend data pipelines to highly crafted frontend interfaces that users trust.',
    },
    {
        title: 'Technical Leadership',
        description:
            "Comfortable owning architecture decisions and mentoring engineers — I've provided technical guidance and oversight to developer trainees in production teams.",
    },
]

export default function Expertise() {
    return (
        <section id="expertise" className="border-b border-border py-28 md:py-36">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-foreground" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Areas of Expertise
                    </span>
                </div>
                <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.02] tracking-tight md:text-6xl">
                        From prototype
                        <br />
                        to production.
                    </h2>
                    <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                        Plenty of people can wire up an LLM demo. My focus is what happens
                        after — the pipeline holds up, the costs make sense, and the system
                        is still running when it matters.
                    </p>
                </div>

                <div className="mt-20 grid gap-x-16 md:grid-cols-2">
                    {areas.map((area, i) => (
                        <div
                            key={area.title}
                            className="grid grid-cols-[auto_1fr] gap-6 border-t border-border py-8 md:gap-10"
                        >
                            <span className="font-mono text-sm text-muted-foreground">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                                    {area.title}
                                </h3>
                                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                                    {area.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}