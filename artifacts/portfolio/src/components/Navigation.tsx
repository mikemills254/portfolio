import { useEffect, useState } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border/50 py-4' : 'bg-transparent py-6'
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          data-testid="nav-logo"
          aria-label="Back to top"
        >
          E.M.
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('work')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-link-work">Work</button>
          <button onClick={() => scrollTo('expertise')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-link-expertise">Expertise</button>
          <button onClick={() => scrollTo('timeline')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-link-timeline">Timeline</button>
          <button onClick={() => scrollTo('contact')} className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors" data-testid="nav-cta-contact">
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
}
