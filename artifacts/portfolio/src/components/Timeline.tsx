import { useFadeIn } from '../hooks/use-fade-in';

const roles = [
  {
    company: "Stratos Consulting",
    title: "Principal Consultant",
    period: "2021 – Present",
    description: "Advising Series B and C startups on technical strategy, architecture, and scaling engineering organizations. Lead architect for three major infrastructure overhauls."
  },
  {
    company: "Nexus Financial",
    title: "Principal Engineer",
    period: "2018 – 2021",
    description: "Directed a 40-person engineering department. Spearheaded the migration from a monolithic core to a service-oriented architecture, improving deployment frequency by 400%."
  },
  {
    company: "Altimeter Systems",
    title: "Staff Software Engineer",
    period: "2015 – 2018",
    description: "Led the core platform team. Designed and built the foundational data ingestion pipeline processing 2B+ events daily."
  },
  {
    company: "Cortex Intelligence",
    title: "Senior Engineer",
    period: "2012 – 2015",
    description: "Early engineer. Built the initial real-time analytics dashboard and established early testing protocols."
  }
];

export function Timeline() {
  const ref = useFadeIn();

  return (
    <section id="timeline" className="py-24 md:py-32 px-6 md:px-12 max-w-3xl mx-auto" data-testid="section-timeline">
      <div ref={ref}>
        <div className="mb-16 text-center">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-timeline-label">Career Progression</h2>
          <h3 className="text-3xl font-bold tracking-tight" data-testid="text-timeline-headline">A decade of compound growth.</h3>
        </div>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {roles.map((role, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" data-testid={`card-timeline-${i}`}>
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-card rounded border border-border hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h4 className="font-bold text-lg">{role.title}</h4>
                  <span className="text-xs font-semibold text-muted-foreground mt-1 sm:mt-0 bg-secondary px-2 py-1 rounded">{role.period}</span>
                </div>
                <div className="text-primary font-medium text-sm mb-4">{role.company}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
