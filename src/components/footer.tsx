import { useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      // Small delay to allow the home page to render before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="border-t border-border/50 py-12 px-6 md:px-12 bg-background" data-testid="footer-main">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-bold tracking-tight">M.M.NGAIRA</div>

        <div className="flex items-center gap-6">
          <button onClick={() => handleNavigation('work')} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-work">Work</button>
          <button onClick={() => handleNavigation('expertise')} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-expertise">Expertise</button>
          <button onClick={() => navigate('/timeline')} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-timeline">Timeline</button>
        </div>

        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
