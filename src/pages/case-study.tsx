import { Seo } from '../components/seo';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getCaseStudy } from '../data/case-studies';
import { ArchitectureDiagram } from '../components/case-study/architecture-diagram';
import { CardVisual } from '../components/case-study/card-visual';
import { TechStackIcons } from '../components/case-study/tech-stack-icons';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';
import NotFound from './not-found';

function goToSection(navigate: ReturnType<typeof useNavigate>, id: string) {
    navigate('/');
    setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

export default function CaseStudy() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const caseStudy = slug ? getCaseStudy(slug) : undefined;

    if (!caseStudy) {
        return <NotFound />;
    }

    return (
        <>
            <Seo
                title={`${caseStudy.title} | Mills`}
                description={caseStudy.summary}
                canonical={`https://mills.co.ke/work/${caseStudy.slug}`}
                type="article"
            >
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mills.co.ke/' },
                            { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://mills.co.ke/portfolio' },
                            { '@type': 'ListItem', position: 3, name: caseStudy.title, item: `https://mills.co.ke/work/${caseStudy.slug}` },
                        ],
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CreativeWork',
                        name: caseStudy.title,
                        description: caseStudy.summary,
                        url: `https://mills.co.ke/work/${caseStudy.slug}`,
                        keywords: caseStudy.stack.join(', '),
                        creator: { '@type': 'Person', name: 'Mills' },
                    })}
                </script>
            </Seo>
            <main className="min-h-dvh w-full flex flex-col relative" data-testid="page-case-study">
                <Navbar />

                <div className="grow">
                    <section className="pt-36 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
                        <button
                            onClick={() => goToSection(navigate, 'work')}
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10 cursor-pointer"
                            data-testid="link-back-to-work"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to work
                        </button>

                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-case-study-category">
                            {caseStudy.category}
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-case-study-title">
                            {caseStudy.title}
                        </h1>
                        <p className="text-muted-foreground leading-relaxed">{caseStudy.role}</p>
                    </section>

                    <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16">
                        <CardVisual slug={caseStudy.slug} className="h-56 md:h-64" />
                    </section>

                    <section className="px-6 md:px-12 max-w-4xl mx-auto pb-16">
                        <TechStackIcons stack={caseStudy.stack} size="md" />
                    </section>

                    <section className="px-6 md:px-12 max-w-4xl mx-auto pb-16">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4">The Problem</h2>
                        <p className="text-lg leading-relaxed">{caseStudy.problem}</p>
                    </section>

                    <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-8">Architecture</h2>
                        <ArchitectureDiagram stages={caseStudy.diagram} />
                    </section>

                    <section className="px-6 md:px-12 max-w-4xl mx-auto pb-16">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-8">The Approach</h2>
                        <div className="space-y-8">
                            {caseStudy.approach.map((step, i) => (
                                <div key={step.title} className="flex gap-6" data-testid={`step-approach-${i}`}>
                                    <div className="shrink-0 w-9 h-9 rounded-sm border border-border flex items-center justify-center font-semibold text-sm text-primary">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1.5">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="px-6 md:px-12 max-w-4xl mx-auto pb-24">
                        <div className="bg-card border border-border rounded p-8">
                            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4">Outcome</h2>
                            <p className="leading-relaxed">{caseStudy.outcome}</p>
                        </div>
                    </section>

                    <section className="px-6 md:px-12 max-w-4xl mx-auto pb-24 md:pb-32">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                            <p className="text-muted-foreground text-sm">Have a similar problem to solve?</p>
                            <button
                                onClick={() => goToSection(navigate, 'contact')}
                                className="px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors flex items-center gap-2 group cursor-pointer"
                                data-testid="link-case-study-contact"
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
