export default function Footer() {
    return (
        <footer className="py-14">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-xs">
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-xl font-semibold tracking-tight">Mills</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                AI/RAG
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            AI &amp; RAG engineer building systems that hold up in production.
                            Nairobi, working across East Africa and remote.
                        </p>
                    </div>

                    <div className="flex gap-16">
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                Navigate
                            </p>
                            <ul className="mt-4 flex flex-col gap-3 text-sm">
                                <li>
                                    <a
                                        href="#work"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Work
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#expertise"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Expertise
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Services
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                Connect
                            </p>
                            <ul className="mt-4 flex flex-col gap-3 text-sm">
                                <li>
                                    <a
                                        href="mailto:hello@mills.co.ke"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Email
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://linkedin.com"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row">
                    <p className="font-mono text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Mills. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                        Available for new engagements
                    </div>
                </div>
            </div>
        </footer>
    )
}