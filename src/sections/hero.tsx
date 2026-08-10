import { ArrowRight } from 'lucide-react'
import { ParticleSpiral } from '../components/ui/particle-spiral'

const STATS = [
    { value: '3+', label: 'civic AI products shipped', tag: 'PRODUCTION' },
    { value: '~50%', label: 'faster builds via shared pipeline', tag: 'RAG' },
    { value: 'OGP', label: 'recognized budget platform', tag: 'IMPACT' },
    { value: 'EAT', label: 'Nairobi · East Africa · remote', tag: 'BASED IN' },
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
            <ParticleSpiral className="pointer-events-none absolute -right-48 -top-32 h-[1050px] w-[1050px] text-foreground/75 md:-right-16 lg:h-[1200px] lg:w-[1200px]" />

            <div className="relative mx-auto max-w-6xl px-6 pt-36 md:pt-44">
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-foreground" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        AI &amp; RAG Engineer — Nairobi, Kenya
                    </span>
                </div>

                <h1 className="mt-6 max-w-4xl text-balance text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                    AI systems
                    <br />
                    that <span className="text-muted-foreground">ship.</span>
                </h1>

                <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                        RAG and agentic AI engineering for teams who need it to work in
                        production, not just in a demo. Based in Nairobi, working across
                        East Africa and remote.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            View our work
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                        >
                            Get in touch
                        </a>
                    </div>
                </div>

                {/* stats row */}
                <div className="mt-16 grid grid-cols-2 gap-y-8 border-t border-border pt-8 md:grid-cols-4 md:gap-0">
                    {STATS.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col md:px-6 ${i !== 0 ? 'md:border-l md:border-border' : ''
                                }`}
                        >
                            <span className="text-3xl font-medium tracking-tight md:text-4xl">
                                {stat.value}
                            </span>
                            <span className="mt-1 text-sm text-muted-foreground">
                                {stat.label}
                            </span>
                            <span className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                                {stat.tag}
                            </span>
                        </div>
                    ))}
                </div>

                {/* tech marquee */}
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
