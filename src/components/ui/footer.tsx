import { Link, useLocation, useNavigate } from 'react-router-dom';

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
                <div className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavigation('home')}>
                    <img src="/logo.svg" alt="" className="h-7 w-auto" />
                    <span className="text-sm font-bold tracking-tight">Mills</span>
                </div>

                <div className="flex items-center gap-6">
                    <Link to="/about" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-about">About</Link>
                    <button onClick={() => handleNavigation('work')} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-work">Work</button>
                    <button onClick={() => handleNavigation('expertise')} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-expertise">Expertise</button>
                    <Link to="/services" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-services">Services</Link>
                </div>

                <div className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
}
