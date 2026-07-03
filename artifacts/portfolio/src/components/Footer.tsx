export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border/50 py-12 px-6 md:px-12 bg-background" data-testid="footer-main">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-bold tracking-tight">E.M.</div>
        
        <div className="flex items-center gap-6">
          <button onClick={() => scrollTo('work')} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-work">Work</button>
          <button onClick={() => scrollTo('expertise')} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-expertise">Expertise</button>
          <button onClick={() => scrollTo('timeline')} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-timeline">Timeline</button>
        </div>
        
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
