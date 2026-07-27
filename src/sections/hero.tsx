import { useEffect, useState } from 'react';
import { ArrowRight, Network } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const CYCLING_WORDS = ['ship.', 'hold up in production.', 'actually get used.', 'scale.'];

const MARQUEE_ITEMS = [
    'TypeScript',
    'Node.js',
    'LangChain',
    'Agentic Workflows',
    'Vector Search',
    'Pinecone',
    'Weaviate',
    'OpenAI / GPT-4',
    'PostgreSQL',
    'AWS',
    'Docker',
    'React',
];

function FadedGradientBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-background">
            {/* A large, very soft, faded gradient glow */}
            <div 
                className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[100vw] h-[80vh] opacity-30 blur-[100px]"
                style={{
                    background: 'radial-gradient(ellipse at top, hsl(var(--primary)) 0%, transparent 70%)'
                }}
            />
            
            {/* A secondary subtle glow for balance */}
            <div 
                className="absolute bottom-[-10%] -left-[10%] w-[50vw] h-[50vh] opacity-10 blur-[80px]"
                style={{
                    background: 'radial-gradient(circle at center, hsl(var(--primary)) 0%, transparent 70%)'
                }}
            />
            
            {/* Vignette mask to fade the edges smoothly */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, transparent 40%, hsl(var(--background)) 100%)',
                }}
            />
        </div>
    );
}

function MarqueeTrack() {
    const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    return (
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden border-y border-border/30 py-4 mt-20 bg-background/40 backdrop-blur-md">
            <motion.div
                className="flex gap-12 whitespace-nowrap w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            >
                {doubled.map((item, i) => (
                    <span key={i} className="flex items-center gap-12 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                        {item}
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 inline-block flex-shrink-0" />
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const t = setInterval(() => {
            setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
        }, 2500);
        return () => clearInterval(t);
    }, []);

    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center pt-32 pb-0 px-6 md:px-12 relative overflow-hidden bg-background"
            data-testid="section-hero"
        >
            <FadedGradientBackground />

            {/* Main content */}
            <motion.div
                className="relative z-10 w-full max-w-5xl mx-auto text-center"
                style={{ y: yTransform, opacity: opacityTransform }}
            >

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.1 }}
                >
                    <h1
                        className="text-6xl sm:text-7xl md:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-2"
                        data-testid="text-hero-headline"
                    >
                        AI systems that
                    </h1>

                    {/* Animated cycling word */}
                    <div
                        className="relative h-[1.1em] overflow-hidden text-6xl sm:text-7xl md:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight"
                        aria-live="polite"
                    >
                        <AnimatePresence mode="popLayout" initial={false}>
                            <motion.span
                                key={wordIndex}
                                initial={{ y: '100%', opacity: 0, rotateX: -90 }}
                                animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                                exit={{ y: '-100%', opacity: 0, rotateX: 90 }}
                                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent origin-bottom"
                            >
                                {CYCLING_WORDS[wordIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-10 mb-12"
                    data-testid="text-hero-subhead"
                >
                    RAG and agentic AI engineering for teams who need it to work in production, not just in a demo. Based in Nairobi, working across East Africa and remote.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => scrollTo('work')}
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 group"
                        data-testid="button-hero-work"
                    >
                        View My Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => scrollTo('contact')}
                        className="w-full sm:w-auto px-8 py-4 text-foreground text-sm font-bold border-2 border-border/50 rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all"
                        data-testid="button-hero-contact"
                    >
                        Get In Touch
                    </button>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full"
            >
                <MarqueeTrack />
            </motion.div>
        </section>
    );
}
