import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CYCLING_WORDS = ['ships.', 'scales.', 'compounds.', 'lasts.'];

const MARQUEE_ITEMS = [
  'Full Stack Engineering',
  'Enterprise AI',
  'Cloud Architecture',
  'RAG Systems',
  'Technical Leadership',
  'System Design',
  'Team Scaling',
  'AI Integration',
  'Platform Engineering',
  'Distributed Systems',
];

function MarqueeTrack() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden border-y border-border py-4 mt-20 bg-background/80 backdrop-blur-sm">
      <motion.div
        className="flex gap-12 whitespace-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {item}
            <span className="w-1 h-1 rounded-full bg-primary/60 inline-block flex-shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center pt-28 pb-0 px-6 md:px-12 relative overflow-hidden"
      data-testid="section-hero"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.6,
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 40%, transparent 20%, hsl(var(--background)) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.04] tracking-tight mb-0"
            data-testid="text-hero-headline"
          >
            Software that
          </h1>

          {/* Animated cycling word */}
          <div
            className="relative h-[1.1em] overflow-hidden text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.04] tracking-tight text-primary"
            aria-live="polite"
            aria-label={`Software that ${CYCLING_WORDS[wordIndex]}`}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={wordIndex}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {CYCLING_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mt-8 mb-10"
          data-testid="text-hero-subhead"
        >
          Full Stack and AI consulting for teams with hard problems and zero tolerance for slow.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo('work')}
            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
            data-testid="button-hero-work"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3.5 text-foreground text-sm font-semibold border border-border rounded-sm hover:bg-secondary transition-colors"
            data-testid="button-hero-contact"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Full-bleed scrolling marquee */}
      <MarqueeTrack />
    </section>
  );
}
