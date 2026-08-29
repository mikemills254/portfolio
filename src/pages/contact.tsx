import { Seo } from '../components/seo'
import Footer from '../components/ui/footer'
import Navbar from '../components/ui/navbar'
import { ArrowRight, Mail, Clock, MapPin } from 'lucide-react'

function LinkedinIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="24" height="24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

const CHANNELS = [
    {
        label: 'Email',
        value: 'hello@mills.co.ke',
        href: 'mailto:hello@mills.co.ke',
        description: 'For projects, audits, or general inquiries. Response within 24 hours.',
        icon: Mail,
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/mills-mike',
        href: 'https://www.linkedin.com/in/mills-mike/',
        description: 'Connect or DM for discussions.',
        icon: LinkedinIcon,
    },
]

export default function ContactPage() {
    return (
        <>
            <Seo
                title="Contact | Mills — AI & RAG Systems Engineering Studio"
                description="Reach out to discuss your AI, RAG pipeline, or backend engineering requirements. Based in Nairobi, Kenya."
                canonical="https://mills.co.ke/contact"
            />
            <main className="min-h-dvh w-full flex flex-col relative bg-background" data-testid="page-contact">
                <Navbar />

                <div className="grow pt-36 md:pt-44 pb-20">
                    <div className="mx-auto max-w-4xl px-6">
                        {/* Header */}
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-foreground" />
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                Let's Connect
                            </span>
                        </div>
                        <h1 className="mt-6 text-balance text-5xl font-medium leading-[1.0] tracking-tight md:text-7xl">
                            Start a
                            <br />
                            conversation.
                        </h1>

                        <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground max-w-2xl">
                            Whether you need a full RAG pipeline, an LLM feature integration, backend architecture guidance, or a pre-launch system audit — I'd love to hear what you are working on.
                        </p>

                        <div className="mt-16 grid gap-8 md:grid-cols-2">
                            {/* Left details column */}
                            <div className="flex flex-col gap-6">
                                <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                    Availability & Info
                                </h2>
                                
                                <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-5">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-foreground text-sm">Location</p>
                                            <p className="text-sm text-muted-foreground mt-1">Nairobi, Kenya — supporting remote teams globally & local teams in East Africa.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Clock className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-foreground text-sm">Current Status</p>
                                            <p className="text-sm text-muted-foreground mt-1">Accepting new engagements for Q3/Q4 2026. Bounded projects or retainer support.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right contact channels column */}
                            <div className="flex flex-col gap-6">
                                <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                    Direct Channels
                                </h2>

                                <div className="flex flex-col gap-4">
                                    {CHANNELS.map((channel) => {
                                        const Icon = channel.icon
                                        return (
                                            <a
                                                key={channel.label}
                                                href={channel.href}
                                                target={channel.label === 'LinkedIn' ? '_blank' : undefined}
                                                rel={channel.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                                                className="group rounded-xl border border-border bg-card p-6 hover:bg-accent transition-colors block text-left"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="rounded-full bg-primary/5 p-2 text-foreground">
                                                        <Icon className="h-4 w-4" />
                                                    </div>
                                                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                                        {channel.label}
                                                    </span>
                                                </div>
                                                <h3 className="mt-4 flex items-center gap-1.5 text-lg font-medium text-foreground">
                                                    {channel.value}
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                                </h3>
                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    {channel.description}
                                                </p>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}
