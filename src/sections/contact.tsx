import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONTACT_EMAIL = 'hello@mills.co.ke';

function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

const contactMethods = [
    {
        name: 'Email',
        description: 'hello@mills.co.ke',
        icon: Mail,
        href: `mailto:${CONTACT_EMAIL}`,
        isExternal: true,
        delay: 0.1
    },
    {
        name: 'LinkedIn',
        description: "Let's connect professionally",
        icon: LinkedInIcon,
        href: 'https://www.linkedin.com/in/mills-mike/',
        isExternal: true,
        delay: 0.2
    },
    {
        name: 'Portfolio',
        description: 'View our case studies',
        icon: FolderOpen,
        href: '/portfolio',
        isExternal: false,
        delay: 0.3
    }
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto relative"
            data-testid="section-contact"
        >
            <div className="flex flex-col items-center text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                >
                    <p className="text-sm uppercase tracking-[0.2em] font-bold text-primary/80 mb-4" data-testid="text-contact-label">
                        Get In Touch
                    </p>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6" data-testid="text-contact-headline">
                        Let's build something that matters.
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        I'm selective about engagements — I work best with teams who have a real problem
                        and the conviction to solve it properly. Reach out to discuss your AI or backend infrastructure needs.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {contactMethods.map((method) => {
                    const isPortfolio = method.name === 'Portfolio';

                    const content = (
                        <>
                            {/* Glow effect on hover for non-primary cards */}
                            {!isPortfolio && <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />}

                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 relative z-10 ${isPortfolio
                                ? "bg-primary-foreground/20 group-hover:scale-110"
                                : "bg-background border border-border/50 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30"
                                }`}>
                                <method.icon className={`w-7 h-7 transition-colors ${isPortfolio ? "text-primary-white" : "text-muted-foreground group-hover:text-primary"
                                    }`} />
                            </div>

                            <h3 className="text-xl font-bold mb-2 relative z-10">{method.name}</h3>
                            <p className={`text-sm relative z-10 ${isPortfolio ? "text-white" : "text-muted-foreground"}`}>{method.description}</p>

                            <div className="mt-8 relative z-10">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isPortfolio
                                    ? "bg-primary-foreground text-primary hover:bg-background"
                                    : "bg-secondary/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                                    }`}>
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </>
                    );

                    const className = isPortfolio
                        ? "group relative bg-primary text-primary-foreground rounded-3xl p-8 flex flex-col items-center text-center hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden block"
                        : "group relative bg-card/20 backdrop-blur-md rounded-3xl border border-border/50 p-8 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-500 overflow-hidden block";

                    return method.isExternal ? (
                        <motion.a
                            key={method.name}
                            href={method.href}
                            target={method.name !== 'Email' ? "_blank" : undefined}
                            rel={method.name !== 'Email' ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 60, damping: 20, delay: method.delay }}
                            className={className}
                        >
                            {content}
                        </motion.a>
                    ) : (
                        <motion.div
                            key={method.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 60, damping: 20, delay: method.delay }}
                            className="h-full block"
                        >
                            <Link to={method.href} className={className + " h-full w-full"}>
                                {content}
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
