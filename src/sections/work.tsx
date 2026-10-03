import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/case-studies'

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

function ReadCaseStudy() {
    return (
        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground">
            Read the case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
    )
}

export default function Work() {
    const [featured, ...rest] = caseStudies

    return (
        <section id="work" className="border-b border-border py-28 md:py-36">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-foreground" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Selected Work
                    </span>
                </div>
                <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <h2 className="max-w-3xl text-balance text-4xl font-medium leading-[1.02] tracking-tight md:text-6xl">
                        Outcomes,
                        <br />
                        not just output.
                    </h2>
                    <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                        Production systems shaped by real constraints — public data, hospital
                        compliance, service-business operations.
                    </p>
                </div>

                {/* Featured — big numbered row */}
                <Link to={`/work/${featured.slug}`} className="group mt-20 block border-t border-border pt-10">
                    <article className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-16">
                        <span className="font-mono text-sm text-muted-foreground">01</span>
                        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
                            <div>
                                <div className="flex flex-wrap items-center gap-2.5">
                                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                        {featured.category}
                                    </p>
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        OGP Recognized · Live Platform
                                    </span>
                                </div>
                                <h3 className="mt-4 text-balance text-3xl font-medium leading-tight tracking-tight transition-colors md:text-4xl group-hover:text-primary">
                                    {featured.title}
                                </h3>
                            </div>
                            <div className="flex flex-col justify-between gap-6">
                                <p className="text-pretty leading-relaxed text-muted-foreground">
                                    {featured.summary}
                                </p>
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <StackTags items={featured.stack} />
                                    <ReadCaseStudy />
                                </div>
                            </div>
                        </div>
                    </article>
                </Link>

                {/* Secondary projects as numbered rows */}
                <div className="mt-20 flex items-center gap-3">
                    <span className="h-px w-8 bg-border" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Other engineering work
                    </span>
                </div>

                <div className="mt-8">
                    {rest.map((project, i) => (
                        <Link
                            key={project.slug}
                            to={`/work/${project.slug}`}
                            className="group block border-t border-border py-10"
                        >
                            <article className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-16">
                                <span className="font-mono text-sm text-muted-foreground">
                                    {String(i + 2).padStart(2, '0')}
                                </span>
                                <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:gap-16">
                                    <div>
                                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                            {project.category}
                                        </p>
                                        <h3 className="mt-4 text-balance text-2xl font-medium leading-snug tracking-tight transition-colors group-hover:text-primary">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <p className="text-pretty leading-relaxed text-muted-foreground">
                                            {project.summary}
                                        </p>
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <StackTags items={project.stack} />
                                            <ReadCaseStudy />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
