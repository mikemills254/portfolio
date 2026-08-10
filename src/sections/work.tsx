type Project = {
    title: string
    category: string
    description: string
    stack: string[]
}

const featured: Project = {
    title: 'Sauti ya Bajeti, from a WhatsApp pilot to a budget PWA',
    category: 'Public Finance · AI / PWA',
    description:
        'Built the AI engine and, as adoption grew, the installable web app behind Sauti ya Bajeti ("Voice of the Budget") for the Institute of Public Finance. It launched as a WhatsApp chatbot answering plain-language budget questions, then evolved into a full progressive web app — installable to the home screen, usable offline, with proper budget dashboards layered on top of the original conversational AI and participatory-budgeting polls. Recognized by the Open Government Partnership as part of Machakos County\'s AI-powered, inclusive-governance budget platform.',
    stack: ['Node.js', 'TypeScript', 'React', 'LangChain', 'OpenAI / GPT-4', 'PWA'],
}

const projects: Project[] = [
    {
        title: 'Civic RAG assistant, built once, shipped three times',
        category: 'Civic Tech · RAG',
        description:
            'Designed and built the reusable RAG pipeline — document ingestion, chunking, embedding, vector retrieval, guarded LLM response — behind Sauti ya Bajeti and two other WhatsApp assistants answering plain-language public finance and constitutional-law questions from a structured knowledge base, no app download required. Standardized the pipeline into a shared internal library, cutting build time for each new civic product by roughly 50%.',
        stack: [
            'Node.js',
            'TypeScript',
            'LangChain',
            'Pinecone',
            'OpenAI / GPT-4',
            'AWS',
        ],
    },
    {
        title: 'Business management platform for service businesses',
        category: 'SaaS · Backend',
        description:
            'Built and maintained the backend for a POS and business-management platform — booking, staff profiles, inventory, and transaction processing — with role-based access control and integrated accounting sync for automated financial tracking.',
        stack: ['Node.js', 'TypeScript', 'MongoDB', 'Docker'],
    },
    {
        title: 'Hospital pharmacy inventory system',
        category: 'Healthcare · Backend',
        description:
            'Built a web portal for hospital medicine inventory, prescription dispensing, and procurement — real-time stock monitoring and expiry-date tracking to support regulatory compliance.',
        stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'React'],
    },
]

function StackTags({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
                <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default function Work() {
    return (
        <section id="work" className="border-b border-border py-28 md:py-36">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-foreground" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Selected Work
                    </span>
                </div>
                <h2 className="mt-6 max-w-3xl text-balance text-4xl font-medium leading-[1.02] tracking-tight md:text-6xl">
                    Outcomes,
                    <br />
                    not just output.
                </h2>

                {/* Featured — big numbered row */}
                <article className="mt-20 grid gap-8 border-t border-border pt-10 md:grid-cols-[auto_1fr] md:gap-16">
                    <span className="font-mono text-sm text-muted-foreground">01</span>
                    <div className="grid gap-8 md:grid-cols-2 md:gap-16">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                {featured.category}
                            </p>
                            <h3 className="mt-4 text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                                {featured.title}
                            </h3>
                        </div>
                        <div className="flex flex-col justify-between gap-6">
                            <p className="text-pretty leading-relaxed text-muted-foreground">
                                {featured.description}
                            </p>
                            <StackTags items={featured.stack} />
                        </div>
                    </div>
                </article>

                {/* Secondary projects as numbered rows */}
                <div className="mt-20 flex items-center gap-3">
                    <span className="h-px w-8 bg-border" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Other engineering work
                    </span>
                </div>

                <div className="mt-8">
                    {projects.map((project, i) => (
                        <article
                            key={project.title}
                            className="grid gap-6 border-t border-border py-10 md:grid-cols-[auto_1fr] md:gap-16"
                        >
                            <span className="font-mono text-sm text-muted-foreground">
                                {String(i + 2).padStart(2, '0')}
                            </span>
                            <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:gap-16">
                                <div>
                                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                        {project.category}
                                    </p>
                                    <h3 className="mt-4 text-balance text-2xl font-medium leading-snug tracking-tight">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <p className="text-pretty leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>
                                    <StackTags items={project.stack} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}