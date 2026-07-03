import { ArrowRight } from 'lucide-react';
import { useFadeIn } from '../hooks/use-fade-in';

export function Hero() {
  const ref = useFadeIn();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-20 px-6 md:px-12 relative overflow-hidden"
      data-testid="section-hero"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          opacity: 0.35,
        }}
      />
      {/* Radial fade to white at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, hsl(var(--background)) 100%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/80 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-8"
          data-testid="text-hero-label"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          Available for select engagements
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          data-testid="text-hero-headline"
        >
          Engineering that moves{' '}
          <span className="text-primary">businesses forward.</span>
        </h1>

        {/* Subhead */}
        <p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
          data-testid="text-hero-subhead"
        >
          Full Stack and AI consulting for teams that need to ship faster, scale smarter, and solve problems that most engineers won't touch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('work')}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
            data-testid="button-hero-work"
          >
            View Experience
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-foreground text-sm font-medium border border-border rounded hover:bg-secondary transition-colors"
            data-testid="button-hero-contact"
          >
            Get In Touch
          </button>
        </div>

        {/* Social proof strip */}
        <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {[
            { value: '12+', label: 'Years of experience' },
            { value: '60+', label: 'Projects shipped' },
            { value: '8', label: 'Industries served' },
            { value: '$0', label: 'Missed deadlines' },
          ].map((stat) => (
            <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
