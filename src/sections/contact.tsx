import { ArrowRight } from 'lucide-react'

const channels = [
    {
        label: 'Email',
        value: 'hello@mills.co.ke',
        href: 'mailto:hello@mills.co.ke',
    },
    { label: 'LinkedIn', value: '/in/mills', href: 'https://linkedin.com' },
    { label: 'Portfolio', value: 'View case studies', href: '/portfolio' },
]

export default function Contact() {
    return (
        <section id="contact" className="border-b border-border py-28 md:py-40">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <div className="flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-foreground" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Let&apos;s build something that matters
                    </span>
                    <span className="h-px w-8 bg-foreground" />
                </div>

                <h2 className="mx-auto mt-8 max-w-3xl text-balance text-5xl font-medium leading-[1.0] tracking-tight md:text-7xl">
                    Build something
                    <br />
                    that matters.
                </h2>

                <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                    I&apos;m selective about engagements — I work best with teams who have
                    a real problem and the conviction to solve it properly. Reach out to
                    discuss your AI or backend infrastructure needs.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="mailto:hello@mills.co.ke"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Get in touch
                        <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                        href="#work"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                        View our work
                    </a>
                </div>

                <div className="mx-auto mt-16 grid max-w-3xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                    {channels.map((channel) => (
                        <a
                            key={channel.label}
                            href={channel.href}
                            className="group bg-card p-6 text-left transition-colors hover:bg-accent"
                        >
                            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                {channel.label}
                            </p>
                            <p className="mt-2 flex items-center gap-1.5 text-base font-medium text-foreground">
                                {channel.value}
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}