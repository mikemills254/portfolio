import { Helmet } from 'react-helmet-async';
import Footer from '@/components/footer';
import { useFadeIn } from '../hooks/use-fade-in';
import Navbar from '@/components/nabvar';

interface Role {
    company: string;
    title: string;
    period: string;
    description: string;
}

interface Publication {
    title: string;
    venue: string;
    date: string;
    role: string;
    link: string;
    description: string;
}

const roles: Role[] = [
    {
        company: "ColMusk Limited",
        title: "AI & RAG Engineer (Full Stack)",
        period: "2025 – Present",
        description:
            "Designing and maintaining RAG-based AI systems for enterprise knowledge retrieval. Built an enterprise knowledge platform with document ingestion, chunking, embeddings, and LLM response generation, plus a reusable internal library that cut new AI application development time by roughly 50%.",
    },
    {
        company: "Liquid Hack Group",
        title: "Software Developer (Backend)",
        period: "Oct 2024 – Dec 2025",
        description:
            "Built and maintained backend APIs for a POS and business management platform for salons and barbershops, covering booking, staff profiles, inventory, and transactions. Implemented RBAC and integrated Zoho Books for automated financial tracking.",
    },
    {
        company: "Graph Technologies",
        title: "Software Developer",
        period: "Oct 2023 – Oct 2024",
        description:
            "Built and enhanced web-based portals for hospital operations and pharmacy inventory management, including real-time stock monitoring and expiry-date tracking to improve regulatory compliance.",
    },
    {
        company: "Hadi & Company",
        title: "Backend Software Development",
        period: "Jan 2024 – Jul 2024",
        description:
            "Developed secure backend services including authentication systems, optimized database queries, and scalable APIs supporting mobile and web applications, with automated testing.",
    },
];

// TODO: replace placeholder values below with the real publication details
const publications: Publication[] = [
    {
        title: "AI and Wanjiku: Using AI to Bridge Budget Transparency and Civic Engagement in Kenya in Taita Taveta and Kwale counties",
        venue: "IEEE XPlore",
        date: "2026",
        role: "Lead Developer",
        link: "https://ieeexplore.ieee.org/document/11533790",
        description: "This paper explores the potential of AI-driven tools to enhance budget transparency and civic engagement in Kenya, focusing on case studies in Taita Taveta and Kwale counties. The research investigates how accessible AI interfaces can help ordinary citizens better understand and interact with complex government budget information, ultimately fostering greater accountability and participation in local governance.",
    },
];

const TIMELINE_RAIL =
    "before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 " +
    "before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent " +
    "md:before:mx-auto md:before:translate-x-0";

function TimelineDot() {
    return (
        <div
            className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary shadow shrink-0 z-10 transition-colors group-hover:border-primary/20 md:absolute md:left-1/2 md:-translate-x-1/2"
        >
            <div className="w-2 h-2 bg-primary rounded-full" />
        </div>
    );
}

function TimelineCard({ role }: { role: Role }) {
    return (
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-card rounded border border-border hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h4 className="font-bold text-lg">{role.title}</h4>
                <span className="text-xs font-semibold text-muted-foreground mt-1 sm:mt-0 bg-secondary px-2 py-1 rounded">
                    {role.period}
                </span>
            </div>
            <div className="text-primary font-medium text-sm mb-4">{role.company}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
        </div>
    );
}

function TimelineItem({ role, index }: { role: Role; index: number }) {
    const isEven = index % 2 === 0;
    return (
        <div
            className={`relative flex items-center justify-between group ${isEven ? "md:flex-row-reverse" : "md:flex-row"
                }`}
            data-testid={`card-timeline-${index}`}
        >
            <div className="hidden md:block w-[calc(50%-3rem)]" />
            <TimelineDot />
            <TimelineCard role={role} />
        </div>
    );
}

function PublicationCard({ publication }: { publication: Publication }) {
    return (
        <div className="p-6 bg-card w-full rounded border border-border transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h4 className="font-bold text-lg">{publication.title}</h4>
                <span className="text-xs font-semibold text-muted-foreground bg-secondary px-2 py-1 rounded whitespace-nowrap">
                    {publication.date}
                </span>
            </div>
            <div className="text-primary font-medium text-sm mb-1">{publication.venue}</div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground mb-4">
                {publication.role}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {publication.description}
            </p>
            <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:underline"
            >
                Read the paper →
            </a>
        </div>
    );
}

export default function Timeline() {
    const ref = useFadeIn();

    return (
        <>
            <Helmet>
                <title>Career Timeline | Mike Mills Ngaira</title>
                <meta name="description" content="Career progression and achievements of Mike Mills. See my professional journey in Full Stack Development and AI." />
                <link rel="canonical" href="https://mills.co.ke/timeline" />
            </Helmet>
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <section
                    id="timeline"
                    className="py-24 md:py-32 px-6 md:px-12 max-w-screen mx-auto"
                    data-testid="section-timeline"
                >
                    <div ref={ref}>
                        <div className="mb-16 text-center">
                            <h2
                                className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4"
                                data-testid="text-timeline-label"
                            >
                                Career Progression
                            </h2>
                            <h3 className="text-3xl font-bold tracking-tight" data-testid="text-timeline-headline">
                                A decade of compound growth.
                            </h3>
                        </div>

                        <div className={`space-y-12 relative ${TIMELINE_RAIL}`}>
                            {roles.map((role, i) => (
                                <TimelineItem key={role.company} role={role} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="publications"
                    className="py-24 md:py-32 px-6 md:px-12 max-w-screen mx-auto"
                    data-testid="section-publications"
                >
                    <div className="mb-16 text-center">
                        <h2
                            className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4"
                            data-testid="text-publications-label"
                        >
                            Career Achivements
                        </h2>
                    </div>

                    <div className="space-y-8 w-full">
                        {publications.map((publication) => (
                            <PublicationCard key={publication.title} publication={publication} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
        </>
    );
}