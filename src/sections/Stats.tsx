import { useFadeIn } from '../hooks/use-fade-in';

export default function Stats() {
  const ref = useFadeIn();

  return (
    <section className="py-16 border-y border-border/50 bg-secondary/30 px-6 md:px-12" data-testid="section-stats">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 divide-x divide-border/0 md:divide-border/50">
          <div className="flex flex-col md:px-6 first:pl-0" data-testid="stat-item-0">
            <span className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-2">3+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Years Experience</span>
          </div>
          <div className="flex flex-col md:px-6" data-testid="stat-item-1">
            <span className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-2">20+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Projects Shipped</span>
          </div>
          <div className="flex flex-col md:px-6" data-testid="stat-item-2">
            <span className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-2">4+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Industries Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}
