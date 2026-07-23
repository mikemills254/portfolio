import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/use-fade-in';
import { ArrowRight, Check } from 'lucide-react';

const tiers = [
    {
        title: "Project",
        description: "Fixed scope, fixed price. A RAG pipeline build, an AI feature integration, a backend system, or a pre-launch audit of an existing AI system.",
        points: [
            "RAG pipeline design & build",
            "LLM / AI feature integration",
            "Backend systems & APIs",
            "Pre-launch AI system audit",
        ],
    },
    {
        title: "Retainer",
        description: "An ongoing monthly engagement for teams shipping continuously, including technical oversight and mentorship for junior engineers.",
        points: [
            "Continuous feature development",
            "Architecture & code review",
            "Technical mentorship",
            "Priority turnaround",
        ],
    },
];

export default function Engagement() {
    const ref = useFadeIn();

    return (
        <section id="engagement" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" data-testid="section-engagement">
            <div ref={ref}>
                <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
                    <div>
                        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-engagement-label">How We'd Work Together</h2>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-engagement-headline">Two ways to engage.</h3>
                    </div>
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-70 transition-opacity group"
                        data-testid="link-engagement-full-details"
                    >
                        See full details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tiers.map((t, i) => (
                        <div key={i} className="bg-card rounded border border-border p-8 flex flex-col" data-testid={`card-engagement-${i}`}>
                            <h4 className="text-xl font-bold mb-3">{t.title}</h4>
                            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                {t.description}
                            </p>
                            <ul className="space-y-3 mt-auto pt-6 border-t border-border">
                                {t.points.map((p) => (
                                    <li key={p} className="flex items-center gap-3 text-sm">
                                        <Check className="w-4 h-4 text-primary shrink-0" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
