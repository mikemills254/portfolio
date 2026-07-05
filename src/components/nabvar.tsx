import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleNavigation = (id: string) => {
        setIsMobileMenuOpen(false);
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
        <>
            {/* Desktop / Default Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border/50 py-4' : 'bg-transparent py-6'
                    }`}
                data-testid="nav-main"
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                        data-testid="nav-logo"
                        aria-label="Back to top"
                    >
                        M.M.NGAIRA
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => handleNavigation('work')} className="text-sm cursor-pointer font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-link-work">Work</button>
                        <button onClick={() => handleNavigation('expertise')} className="text-sm cursor-pointer font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-link-expertise">Expertise</button>
                        <button onClick={() => navigate('/timeline')} className="text-sm cursor-pointer font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-link-timeline">Timeline</button>
                        <button onClick={() => handleNavigation('contact')} className="text-sm cursor-pointer font-medium px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors" data-testid="nav-cta-contact">
                            Get In Touch
                        </button>
                    </div>

                    {/* Mobile Menu Toggle (Open) */}
                    <button
                        className="md:hidden relative p-2 -mr-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Full-Screen Overlay */}
            <div
                className={`fixed inset-0 bg-background z-50 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Mobile Menu Header (Matches Default Navbar) */}
                <div className={`flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? 'py-4 border-b border-border/50' : 'py-6'}`}>
                    <Link
                        to="/"
                        className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        M.M.NGAIRA
                    </Link>
                    <button
                        className="p-2 -mr-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-1 flex flex-col justify-center items-center gap-8 pb-20">
                    <button onClick={() => handleNavigation('work')} className="text-3xl font-bold hover:text-primary transition-colors">Work</button>
                    <button onClick={() => handleNavigation('expertise')} className="text-3xl font-bold hover:text-primary transition-colors">Expertise</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); navigate('/timeline'); }} className="text-3xl font-bold hover:text-primary transition-colors">Timeline</button>
                    <button onClick={() => handleNavigation('contact')} className="text-xl font-medium px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors mt-4">
                        Get In Touch
                    </button>
                </div>
            </div>
        </>
    );
}
