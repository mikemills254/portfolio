import { useState, useEffect, type CSSProperties } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    Check,
    ChevronDown,
    Compass,
    Database,
    Package,
    Repeat,
    Zap,
    Network
} from 'lucide-react';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';

const DOT_GRID: CSSProperties = {
    backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    opacity: 0.8,
};

// A dynamic background component that simulates a neural network / RAG vector embedding space
function NetworkBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] opacity-20"
                style={{
                    background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 60%)',
                }}
            />
            <motion.div
                animate={{
                    rotate: [360, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] opacity-20"
                style={{
                    background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 60%)',
                }}
            />
        </div>
    );
}

const process = [
    {
        title: 'Data Discovery & Strategy',
        icon: Compass,
        description: 'We begin by auditing your private data sources (databases, internal wikis, PDFs, APIs). We determine what data is valuable, identify security constraints, and map out the exact RAG architecture needed to solve your specific business problem without over-engineering.',
    },
    {
        title: 'Vector Pipeline Setup',
        icon: Database,
        description: 'Raw data is messy. We build automated ingestion pipelines that clean your data, break it into optimal semantic "chunks", and convert it into vector embeddings. This ensures the AI can quickly and accurately retrieve the exact context it needs when queried.',
    },
    {
        title: 'LLM Integration & Tuning',
        icon: Network,
        description: 'We connect the retrieval pipeline to a Large Language Model (like GPT-4 or Claude). We craft strict system prompts to enforce boundaries, prevent hallucinations, and tune the hybrid search (semantic + keyword) so the AI responds factually.',
    },
    {
        title: 'Deployment & Scaling',
        icon: Zap,
        description: 'The finished AI system is deployed as a robust microservice or API integrated directly into your existing product. We include rate limiting, cost-monitoring, observability logging, and provide comprehensive handoff documentation for your team.',
    },
];

const tiers = [
    {
        title: 'Project',
        icon: Package,
        description: 'Fixed scope, fixed price. Best for a defined deliverable with a clear finish line.',
        goodFor: [
            'Founders validating an AI feature before a full build',
            'Teams with a clear deliverable and a deadline',
            'A second pair of eyes on an existing AI system before launch',
        ],
        includes: [
            'RAG pipeline design & build',
            'LLM / AI feature integration',
            'Backend systems & APIs',
            'Pre-launch AI system audit',
            'Documentation & handoff at completion',
        ],
    },
    {
        title: 'Retainer',
        icon: Repeat,
        description: 'An ongoing monthly engagement for teams shipping continuously.',
        goodFor: [
            'Teams that need continuous AI development without a full-time hire',
            'Startups scaling their RAG infrastructure and need architecture oversight',
            'Teams onboarding engineers who need technical AI mentorship',
        ],
        includes: [
            'Defined monthly scope of work',
            'Architecture & code review',
            'Technical AI mentorship',
            'Priority turnaround',
        ],
    },
];

const faqs = [
    {
        q: 'What exactly is a RAG pipeline and do I need one?',
        a: 'Retrieval-Augmented Generation (RAG) allows Large Language Models (LLMs) to securely query your private data to generate accurate answers. If you want an AI assistant or feature that actually knows about your business documents, codebase, or customer data without hallucinating, you need a RAG pipeline.',
    },
    {
        q: 'How do you prevent the AI from hallucinating or giving wrong answers?',
        a: 'We design the architecture with strict context boundaries, advanced chunking strategies, and hybrid search (keyword + semantic) to ensure the LLM only answers based on the retrieved factual data. We also implement confidence scoring and fallback mechanisms.',
    },
    {
        q: 'Can you integrate AI features into our existing product?',
        a: 'Absolutely. Whether you need a smart semantic search, an intelligent chatbot, or automated data extraction, we can build custom APIs and microservices that integrate seamlessly with your existing backend and frontend stack.',
    },
    {
        q: 'How long does it take to build a custom AI solution?',
        a: 'A focused RAG pipeline proof-of-concept can take 2-4 weeks. Full-scale production systems with complex data ingestion, user authentication, and advanced prompt engineering usually take 1-3 months depending on scope.',
    },
    {
        q: 'Is our data secure when using your AI integrations?',
        a: 'Yes. We prioritize data privacy by utilizing enterprise-grade APIs (like OpenAI Enterprise or Anthropic), deploying open-source models on your private cloud when required, and ensuring no customer data is used to train public models.',
    },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-b border-border/50 py-6 group"
        >
            <button
                onClick={() => setIsOpen((v) => !v)}
                className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                aria-expanded={isOpen}
            >
                <h3 className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-primary' : 'group-hover:text-primary/80'}`}>
                    {q}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-primary/20 text-primary' : 'bg-secondary/50 text-muted-foreground group-hover:bg-secondary'}`}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="text-muted-foreground leading-relaxed pt-4 pr-12">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Services() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function goToContact() {
        navigate('/');
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }

    return (
        <>
            <Helmet>
                <title>Services | AI & RAG Engineering</title>
                <meta name="description" content="Project-based and retainer engagements for RAG pipelines, AI feature integration, and full-stack systems." />
                <link rel="canonical" href="https://mills.co.ke/services" />
            </Helmet>
            <main className="min-h-dvh w-full flex flex-col relative bg-background overflow-hidden">
                <Navbar />
                <NetworkBackground />
                <div className="absolute inset-0 pointer-events-none z-0" style={DOT_GRID} />

                <div className="grow relative z-10">
                    {/* Hero Section */}
                    <section className="relative pt-40 pb-24 px-6 md:px-12">
                        <div className="max-w-6xl mx-auto text-center">
                            <motion.h1
                                initial={{ opacity: 0, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
                            >
                                Intelligent Systems,<br className="hidden md:block" />
                                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">Engineered.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                            >
                                Specializing in custom RAG pipelines and robust AI architectures.
                                We transform your private data into intelligent, production-ready features.
                            </motion.p>
                        </div>
                    </section>

                    {/* Process / Flow Section */}
                    <section className="px-6 md:px-12 max-w-5xl mx-auto pb-32">
                        <div className="text-center mb-20">
                            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-primary/80 mb-2">The RAG Pipeline</h2>
                            <p className="text-muted-foreground">How we move from unstructured data to AI capabilities.</p>
                        </div>

                        <div className="relative">
                            {/* Animated connecting line */}
                            <div className="absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border/50">
                                <motion.div
                                    className="w-full bg-primary"
                                    style={{ height: `${Math.min(100, Math.max(0, (scrolled - 300) / 10))}%` }}
                                />
                            </div>

                            <div className="space-y-16">
                                {process.map((step, i) => {
                                    const isEven = i % 2 === 0;
                                    return (
                                        <motion.div
                                            key={step.title}
                                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                            className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group ${isEven ? 'md:flex-row-reverse' : ''}`}
                                        >
                                            {/* Center Node */}
                                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] transition-all duration-300" />

                                            {/* Content */}
                                            <div className={`pl-20 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-card shadow-lg shadow-primary/10 border border-primary/20 mb-6 group-hover:-translate-y-1 transition-transform ${isEven ? 'md:ml-auto' : ''}`}>
                                                    <step.icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                            </div>

                                            {/* Empty space for alternating layout */}
                                            <div className="hidden md:block w-1/2" />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Tiers Section */}
                    <section className="px-6 md:px-12 max-w-6xl mx-auto pb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-primary/80 mb-2">Engagement Models</h2>
                            <p className="text-muted-foreground">Tailored to how your team operates.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {tiers.map((t, i) => (
                                <motion.div
                                    key={t.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
                                    className="relative group bg-card/20 backdrop-blur-md rounded-[2rem] border border-border/50 p-10 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-14 h-14 rounded-2xl bg-background border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/5">
                                                <t.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-primary/60">Tier 0{i + 1}</span>
                                        </div>

                                        <h3 className="text-3xl font-extrabold mb-4">{t.title}</h3>
                                        <p className="text-muted-foreground mb-10 text-base leading-relaxed">{t.description}</p>

                                        <div className="space-y-8 mt-auto">
                                            <div>
                                                <p className="text-xs uppercase tracking-widest font-semibold text-foreground/50 mb-4">Good fit for</p>
                                                <ul className="space-y-3">
                                                    {t.goodFor.map((item) => (
                                                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="pt-8 border-t border-border/50">
                                                <p className="text-xs uppercase tracking-widest font-semibold text-foreground/50 mb-4">Includes</p>
                                                <ul className="space-y-3">
                                                    {t.includes.map((item) => (
                                                        <li key={item} className="flex items-center gap-3 text-sm font-medium">
                                                            <Check className="w-4 h-4 text-primary shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="px-6 md:px-12 max-w-4xl mx-auto pb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-primary/80 mb-4">FAQ</h2>
                            <h3 className="text-3xl font-bold">AI & RAG Explained</h3>
                        </div>
                        <div className="border-t border-border/50">
                            {faqs.map((f, i) => (
                                <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="px-6 md:px-12 max-w-5xl mx-auto pb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 80, damping: 20 }}
                            className="bg-primary text-primary-foreground rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:20px_20px]" />

                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to build your AI system?</h3>
                                <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                                    Let's discuss your data, use case, and how we can implement a production-ready RAG pipeline for your team.
                                </p>
                                <button
                                    onClick={goToContact}
                                    className="px-8 py-4 bg-background text-foreground text-base font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-xl shadow-black/10"
                                >
                                    Start a Conversation
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    </section>
                </div>

                <Footer />
            </main>
        </>
    );
}
