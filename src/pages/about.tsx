import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';

const timeline = [
    {
        period: '2025 — Present',
        role: 'AI & RAG Engineer (Full Stack)',
        org: 'ColMusk Limited',
        description:
            'Designing and maintaining RAG-based AI systems for enterprise knowledge retrieval and intelligent assistance. Building vector databases with Pinecone, embedding pipelines, and production deployments on AWS and Azure. Providing technical guidance to developer trainees.',
    },
    {
        period: 'Oct 2024 — Dec 2025',
        role: 'Software Developer (Backend)',
        org: 'Liquid Hack Group',
        description:
            'Built and maintained RESTful APIs, optimized database performance, and supported the deployment and stability of web applications.',
    },
    {
        period: 'Oct 2023 — Oct 2024',
        role: 'Software Developer',
        org: 'Graph Technologies',
        description:
            'Built and improved web-based portals supporting hospital operations and pharmacy inventory management.',
    },
    {
        period: 'Jan — Jul 2024',
        role: 'Backend Software Development',
        org: 'Hadi & Company',
        description:
            'Developed secure backend services including authentication systems and scalable APIs supporting mobile and web applications.',
    },
    {
        period: 'Apr — Jul 2023',
        role: 'Industrial Training',
        org: 'Kenya Urban Roads Authority',
        description:
            'Hands-on experience in computer hardware maintenance, operating system installation, network setup, and IT support for organizational systems.',
    },
];

const skillGroups = [
    { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
    { label: 'AI & ML', items: ['LangChain', 'Pinecone', 'Chroma', 'Weaviate', 'Embedding Models', 'RAG Systems'] },
    { label: 'Backend', items: ['Node.js', 'RESTful APIs', 'Authentication Systems', 'Microservices'] },
    { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
    { label: 'Frontend', items: ['React', 'React Native', 'Tailwind CSS'] },
    { label: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'CI/CD'] },
];

export default function About() {
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
                <title>About | Mills</title>
                <meta name="description" content="AI & RAG engineer based in Nairobi, Kenya — career background, experience, and technical stack." />
                <link rel="canonical" href="https://mills.co.ke/about" />
            </Helmet>
            <main className="min-h-dvh w-full flex flex-col relative" data-testid="page-about">
                <Navbar />

                <div className="grow">
                    <section className="pt-36 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-about-label">About</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-about-headline">
                            AI &amp; RAG engineer, based in Nairobi.
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            AI and Full-Stack Software Engineer with over 3 years of experience designing and
                            delivering scalable, secure, high-performance systems across backend, frontend,
                            cloud, and AI. I specialize in building production Retrieval-Augmented Generation
                            pipelines and LLM-integrated applications, backed by solid full-stack and cloud
                            engineering fundamentals.
                        </p>
                    </section>

                    <section className="px-6 md:px-12 max-w-4xl mx-auto pb-20">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-10">Experience</h2>
                        <div className="space-y-12">
                            {timeline.map((t, i) => (
                                <div key={i} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8" data-testid={`timeline-entry-${i}`}>
                                    <span className="text-sm text-muted-foreground font-medium">{t.period}</span>
                                    <div className="border-l border-border pl-6 md:pl-8 pb-2">
                                        <h3 className="font-bold mb-1">{t.role}</h3>
                                        <p className="text-sm text-primary font-medium mb-3">{t.org}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{t.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="px-6 md:px-12 max-w-4xl mx-auto pb-20">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-10">Education</h2>
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                            <span className="text-sm text-muted-foreground font-medium">2023</span>
                            <div className="border-l border-border pl-6 md:pl-8">
                                <h3 className="font-bold mb-1">BSc Computer Science</h3>
                                <p className="text-sm text-muted-foreground">Maasai Mara University — Second Class Honours</p>
                            </div>
                        </div>
                    </section>

                    <section className="px-6 md:px-12 max-w-4xl mx-auto pb-24 md:pb-32">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-10">Stack</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                            {skillGroups.map((g) => (
                                <div key={g.label}>
                                    <h3 className="text-sm font-bold mb-3">{g.label}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {g.items.map((item) => (
                                            <span key={item} className="text-xs font-medium text-muted-foreground bg-secondary/60 border border-border rounded-full px-2.5 py-1">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="px-6 md:px-12 max-w-4xl mx-auto pb-24 md:pb-32">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                            <p className="text-muted-foreground text-sm">Want to work together?</p>
                            <button
                                onClick={goToContact}
                                className="px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors flex items-center gap-2 group cursor-pointer"
                                data-testid="button-about-contact"
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
