import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/case-studies';
import { TechStackIcons } from '../components/case-study/tech-stack-icons';
import { CardVisual } from '../components/case-study/card-visual';

export default function Work() {
    const [featured, ...rest] = caseStudies;

    return (
        <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" data-testid="section-work">
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-primary/80 mb-4" data-testid="text-work-label">Selected Work</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight" data-testid="text-work-headline">Outcomes, not just output.</h3>
                </motion.div>

                {/* Featured RAG / agentic case study */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
                >
                    <Link
                        to={`/work/${featured.slug}`}
                        className="group relative bg-card/20 backdrop-blur-md rounded-[2rem] border border-border/50 p-8 md:p-10 flex flex-col md:flex-row gap-8 hover:border-primary/50 transition-all duration-500 mb-12 overflow-hidden block"
                        data-testid="card-work-featured"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <CardVisual
                            slug={featured.slug}
                            className="w-full md:w-80 h-56 md:h-auto shrink-0 transition-transform duration-500 group-hover:scale-105 rounded-2xl relative z-10"
                        />
                        <div className="flex flex-col flex-1 relative z-10">
                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">{featured.category}</span>
                                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                                </div>
                            </div>
                            <h4 className="text-3xl font-bold mb-4">{featured.title}</h4>
                            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                                {featured.summary}
                            </p>
                            <div className="pt-6 border-t border-border/50 mt-auto">
                                <TechStackIcons stack={featured.stack} />
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Other engineering work */}
                {rest.length > 0 && (
                    <>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-8 text-center md:text-left"
                        >
                            Other Engineering Work
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {rest.map((c, i) => (
                                <motion.div
                                    key={c.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: i * 0.1 }}
                                >
                                    <Link
                                        to={`/work/${c.slug}`}
                                        className="group relative bg-card/20 backdrop-blur-md rounded-3xl border border-border/50 p-8 flex flex-col hover:border-primary/50 transition-all duration-500 h-full overflow-hidden block"
                                        data-testid={`card-work-${i}`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                        <CardVisual slug={c.slug} className="h-40 mb-8 transition-transform duration-500 group-hover:scale-105 rounded-xl relative z-10" />

                                        <div className="mb-6 flex items-center justify-between relative z-10">
                                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{c.category}</span>
                                            <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                                                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 relative z-10">{c.title}</h4>
                                        <p className="text-muted-foreground mb-8 text-sm leading-relaxed grow relative z-10">
                                            {c.summary}
                                        </p>
                                        <div className="pt-6 border-t border-border/50 mt-auto relative z-10">
                                            <TechStackIcons stack={c.stack} />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
