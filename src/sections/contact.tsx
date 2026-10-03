import { ArrowRight, Calendar, Mail } from 'lucide-react'

const channels = [
    {
        label: 'Direct Email',
        value: 'mike@mills.co.ke',
        caption: 'Response within 24 hours',
        href: 'mailto:mike@mills.co.ke',
    },
    {
        label: 'Strategy Call',
        value: 'Book 30-min session',
        caption: 'Architecture & scoping',
        href: 'mailto:mike@mills.co.ke?subject=Schedule%2030-min%20AI%20Strategy%20Call',
    },
    {
        label: 'LinkedIn',
        value: 'Mike Mills',
        caption: 'Professional network',
        href: 'https://linkedin.com',
    },
]

export default function Contact() {
    return (
        <section id="contact" className="border-b border-border py-28 md:py-40">
            <div className="mx-auto max-w-4xl px-6 text-center">
                {/* Availability Badge */}
                <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Currently booking for Q4 &amp; 2025 roadmaps</span>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-foreground" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Let&apos;s build something that matters
                    </span>
                    <span className="h-px w-8 bg-foreground" />
                </div>

                <h2 className="mx-auto mt-8 max-w-3xl text-balance text-5xl font-medium leading-none tracking-tight md:text-7xl">
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
                        href="mailto:mike@mills.co.ke?subject=Schedule%2030-min%20AI%20Strategy%20Call"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        <Calendar className="h-4 w-4" />
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
                            <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                                {channel.caption}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}