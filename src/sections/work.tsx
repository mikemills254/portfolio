import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useFadeIn } from '../hooks/use-fade-in';
import { caseStudies } from '../data/case-studies';

export default function Work() {
    const ref = useFadeIn();

    return (
        <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" data-testid="section-work">
            <div ref={ref}>
                <div className="mb-16">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-work-label">Selected Work</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-work-headline">Outcomes, not just output.</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((c, i) => (
                        <Link
                            to={`/work/${c.slug}`}
                            key={c.slug}
                            className="group relative bg-card rounded border border-border p-8 flex flex-col hover:shadow-md transition-all duration-300 hover:border-primary/20"
                            data-testid={`card-work-${i}`}
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{c.category}</span>
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">{c.title}</h4>
                            <p className="text-muted-foreground mb-8 text-sm leading-relaxed grow">
                                {c.summary}
                            </p>
                            <div className="pt-6 border-t border-border mt-auto flex flex-wrap gap-2">
                                {c.stack.map((s) => (
                                    <span key={s} className="text-xs font-medium text-muted-foreground bg-secondary/60 border border-border rounded-full px-2.5 py-1">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
