import { useFadeIn } from '../hooks/use-fade-in';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: "Enterprise AI Platform",
    role: "Lead Architect",
    metric: "Reduced inference costs by 60%",
    description: "Designed and implemented a scalable, multi-tenant LLM gateway for a Series C fintech. Unified access to disparate models while enforcing strict PII redaction and cost attribution across 40+ engineering teams."
  },
  {
    title: "Cloud Infrastructure Modernization",
    role: "Principal Engineer",
    metric: "99.999% uptime achieved",
    description: "Led the migration of a legacy monolithic healthcare application to a resilient, event-driven microservices architecture on AWS. Automated compliance reporting and reduced deployment times from days to minutes."
  },
  {
    title: "RAG-Powered Knowledge System",
    role: "Technical Lead",
    metric: "Onboarded 200+ enterprise clients",
    description: "Built a high-performance vector search engine integrating proprietary legal corpuses. Delivered sub-second retrieval times and demonstrable improvements in accuracy over off-the-shelf semantic search solutions."
  }
];

export function Work() {
  const ref = useFadeIn();

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" data-testid="section-work">
      <div ref={ref}>
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-work-label">Selected Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-work-headline">Outcomes, not just output.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group relative bg-card rounded border border-border p-8 flex flex-col hover:shadow-md transition-all duration-300 hover:border-primary/20" data-testid={`card-work-${i}`}>
              <div className="mb-8">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{c.role}</span>
              </div>
              <h4 className="text-xl font-bold mb-4">{c.title}</h4>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-grow">
                {c.description}
              </p>
              <div className="pt-6 border-t border-border mt-auto flex items-center justify-between">
                <span className="font-semibold text-primary text-sm">{c.metric}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
