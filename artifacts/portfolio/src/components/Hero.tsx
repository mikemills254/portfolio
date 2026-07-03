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
    <section className="min-h-[90vh] flex items-center pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto" data-testid="section-hero">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center" ref={ref}>
        <div className="flex flex-col items-start">
          <div className="uppercase tracking-[0.2em] text-xs font-semibold text-primary mb-6" data-testid="text-hero-label">Senior Technical Consultant</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6" data-testid="text-hero-headline">
            Architecting <br className="hidden md:block"/> scalable systems for serious companies.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md leading-relaxed" data-testid="text-hero-subhead">
            I partner with executive teams to modernize infrastructure, integrate enterprise AI, and build resilient engineering cultures.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={() => scrollTo('work')}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
              data-testid="button-hero-work"
            >
              View My Work
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
        </div>
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-auto overflow-hidden rounded bg-[#ECEAE4] shadow-sm flex items-center justify-center border border-border/50" data-testid="hero-image-placeholder">
          {/* Tasteful placeholder representing a portrait without using external URLs */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/30">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-32 h-32 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm font-medium tracking-widest uppercase">Portrait Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
