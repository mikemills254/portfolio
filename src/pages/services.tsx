import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';

const process = [
    {
        title: 'Discovery',
        description: 'A short call to understand the problem, constraints, and what "done" looks like.',
    },
    {
        title: 'Proposal',
        description: 'A scoped plan with a timeline and fixed price for a Project, or a defined monthly scope for a Retainer.',
    },
    {
        title: 'Build',
        description: 'Regular check-ins as the system takes shape — not a black box until the deadline.',
    },
    {
        title: 'Handoff',
        description: 'Documentation, a working system, and a clear path for your team to maintain or extend it.',
    },
];

const tiers = [
    {
        title: 'Project',
        description: 'Fixed scope, fixed price. Best for a defined deliverable with a clear finish line.',
        goodFor: [
            'Teams with a clear deliverable and a deadline',
            'Founders validating an AI feature before a full build',
            'A second pair of eyes on an existing system before launch',
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
        description: 'An ongoing monthly engagement for teams shipping continuously.',
        goodFor: [
            'Teams that need continuous AI/backend development without a full-time hire',
            'Teams that want architecture oversight as they scale',
            'Teams onboarding junior engineers who need technical mentorship',
        ],
        includes: [
            'Defined monthly scope of work',
            'Architecture & code review',
            'Technical mentorship',
            'Priority turnaround',
        ],
    },
];

const faqs = [
    {
        q: 'How is pricing determined?',
        a: 'Project pricing is a fixed quote based on scope, provided after a discovery call. Retainer pricing is a fixed monthly rate based on the agreed scope of work.',
    },
    {
        q: 'Do you work with international clients?',
        a: "Yes — I'm based in Nairobi, working with teams across East Africa and remote clients globally.",
    },
    {
        q: "What's the typical project timeline?",
        a: 'Depends on scope — a focused RAG pipeline build or audit can run a few weeks; larger systems take longer. Timeline is agreed upfront as part of the proposal.',
    },
    {
        q: 'Can you join an existing codebase or team?',
        a: "Yes — I've worked inside existing engineering teams and provided technical oversight to other developers, not just solo builds.",
    },
];

export default function Services() {
    const navigate = useNavigate();

    function goToContact() {
        navigate('/');
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }

    return (
        <>
            <Helmet>
                <title>Services | Mike Mills</title>
                <meta name="description" content="Project-based and retainer engagements for RAG pipelines, AI feature integration, and full-stack systems." />
                <link rel="canonical" href="https://mills.co.ke/services" />
            </Helmet>
            <main className="min-h-dvh w-full flex flex-col relative" data-testid="page-services">
                <Navbar />

                <div className="grow">
                    <section className="pt-36 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-services-label">Services</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-services-headline">
                            Two ways to work together.
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            Whether you have a defined deliverable or need continuous engineering support, here's
                            how engagements are structured and what to expect.
                        </p>
                    </section>

                    <section className="px-6 md:px-12 max-w-6xl mx-auto pb-20">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-10">How It Works</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((step, i) => (
                                <div key={step.title} data-testid={`process-step-${i}`}>
                                    <div className="w-9 h-9 rounded-sm border border-border flex items-center justify-center font-semibold text-sm text-primary mb-4">
                                        {i + 1}
                                    </div>
                                    <h3 className="font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="px-6 md:px-12 max-w-6xl mx-auto pb-20">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-10">Engagement Tiers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {tiers.map((t) => (
                                <div key={t.title} className="bg-card rounded border border-border p-8 flex flex-col" data-testid={`tier-${t.title.toLowerCase()}`}>
                                    <h3 className="text-xl font-bold mb-3">{t.title}</h3>
                                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{t.description}</p>

                                    <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">Good fit for</p>
                                    <ul className="space-y-2 mb-6">
                                        {t.goodFor.map((item) => (
                                            <li key={item} className="text-sm text-muted-foreground leading-relaxed">— {item}</li>
                                        ))}
                                    </ul>

                                    <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3 mt-auto pt-6 border-t border-border">Includes</p>
                                    <ul className="space-y-3">
                                        {t.includes.map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm">
                                                <Check className="w-4 h-4 text-primary shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="px-6 md:px-12 max-w-6xl mx-auto pb-24 md:pb-32">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-10">FAQ</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {faqs.map((f) => (
                                <div key={f.q}>
                                    <h3 className="font-bold mb-2">{f.q}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="px-6 md:px-12 max-w-6xl mx-auto pb-24 md:pb-32">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                            <p className="text-muted-foreground text-sm">Ready to talk about your project?</p>
                            <button
                                onClick={goToContact}
                                className="px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors flex items-center gap-2 group cursor-pointer"
                                data-testid="button-services-contact"
                            >
                                Get In Touch
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </section>
                </div>

                <Footer />
            </main>
        </>
    );
}
