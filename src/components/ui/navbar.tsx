import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
    { label: 'Work', id: 'work' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Services', id: 'services' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close mobile menu on page/hash change
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)
        if (location.pathname === '/') {
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            navigate(`/#${id}`)
        }
    }

    return (
        <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
            <nav
                className={`relative flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 md:px-6 ${scrolled
                    ? 'border border-border bg-background/80 shadow-sm backdrop-blur-md'
                    : 'border border-transparent'
                    }`}
            >
                {/* Logo */}
                <Link to="/" className="flex items-baseline gap-1.5 z-50">
                    <span className="text-xl font-semibold tracking-tight">Mills</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        AI/RAG
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={`/#${link.id}`}
                            onClick={(e) => handleNavClick(e, link.id)}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop and Mobile CTAs */}
                <div className="flex items-center gap-2 z-50">
                    <Link
                        to="/contact"
                        className="hidden sm:inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Get in touch
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        className="rounded-full p-2.5 text-foreground hover:bg-foreground/5 md:hidden cursor-pointer"
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu Card */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-0 right-0 mt-3 flex flex-col gap-4 rounded-3xl border border-border bg-background/95 p-6 shadow-lg backdrop-blur-md md:hidden"
                        >
                            <div className="flex flex-col gap-4">
                                {LINKS.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`/#${link.id}`}
                                        onClick={(e) => handleNavClick(e, link.id)}
                                        className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground py-1"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                            
                            <hr className="border-border my-1" />

                            <Link
                                to="/contact"
                                className="inline-flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                            >
                                Get in touch
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    )
}