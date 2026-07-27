import { useFadeIn } from '../hooks/use-fade-in';

const areas = [
    {
        title: "Retrieval-Augmented Generation",
        description: "Production RAG pipelines end to end — document ingestion, chunking, embedding, vector retrieval, and guardrails — not just a prototype that works in a demo."
    },
    {
        title: "Agentic AI & LLM Integration",
        description: "Tool-calling agents, multi-step reasoning, and LLM integrations built for production: reliability, latency, and cost economics, not just capability."
    },
    {
        title: "Backend & API Development",
        description: "Node.js and TypeScript services, microservices architecture, and authentication systems built to hold up under real traffic."
    },
    {
        title: "Cloud & Deployment",
        description: "AWS and Azure deployments, Docker, and CI/CD — pragmatic infrastructure that balances performance with operational overhead."
    },
    {
        title: "Full Stack Development",
        description: "Delivering polished, complete products. From robust backend data pipelines to highly crafted frontend interfaces that users trust."
    },
    {
        title: "Technical Leadership",
        description: "Comfortable owning architecture decisions and mentoring engineers — I've provided technical guidance and oversight to developer trainees in production teams."
    }
];

export default function Expertise() {
    const ref = useFadeIn();

    return (
        <section id="expertise" className="py-24 md:py-32 px-6 md:px-12 bg-secondary/20 border-y border-border/30" data-testid="section-expertise">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <div className="mb-16 md:w-1/2">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-expertise-label">Areas of Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" data-testid="text-expertise-headline">From prototype to production.</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Plenty of people can wire up an LLM demo. My focus is what happens after — the pipeline holds up, the costs make sense, and the system is still running when it matters.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {areas.map((area, i) => (
                        <div key={i} className="flex flex-col" data-testid={`card-expertise-${i}`}>
                            <div className="w-8 h-px bg-primary mb-6"></div>
                            <h4 className="text-lg font-bold mb-3">{area.title}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
