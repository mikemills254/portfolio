import { useFadeIn } from '../hooks/use-fade-in';
import { ArrowUpRight } from 'lucide-react';

const cases = [
    {
        category: "Civic Tech · RAG",
        title: "Civic RAG assistant, built once, shipped three times",
        description: "Designed and built a RAG pipeline — document ingestion, chunking, embedding, vector retrieval, guarded LLM response — that powers WhatsApp assistants answering plain-language public finance and constitutional-law questions from a structured knowledge base, no app download required. Standardized the pipeline into a reusable internal library, cutting build time for each new civic product by roughly 50%.",
        stack: ["Node.js", "TypeScript", "LangChain", "Pinecone", "OpenAI / GPT-4", "AWS", "Docker"],
    },
    {
        category: "SaaS · Backend",
        title: "Business management platform for service businesses",
        description: "Built and maintained the backend for a POS and business-management platform — booking, staff profiles, inventory, and transaction processing — with role-based access control and integrated accounting sync for automated financial tracking.",
        stack: ["Node.js", "TypeScript", "MongoDB", "RESTful APIs", "RBAC", "Docker"],
    },
    {
        category: "Healthcare · Backend",
        title: "Hospital pharmacy inventory system",
        description: "Built a web portal for hospital medicine inventory, prescription dispensing, and procurement — real-time stock monitoring and expiry-date tracking to support regulatory compliance.",
        stack: ["Node.js", "TypeScript", "PostgreSQL", "React", "RESTful APIs"],
    },
];

export default function Work() {
    const ref = useFadeIn();

    return (
        <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" data-testid="section-work">
            <div ref={ref}>
                <div className="mb-16">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-work-label">Selected Work</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-work-headline">Outcomes, not just output.</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <div key={i} className="group relative bg-card rounded border border-border p-8 flex flex-col hover:shadow-md transition-all duration-300 hover:border-primary/20" data-testid={`card-work-${i}`}>
                            <div className="mb-8 flex items-center justify-between">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{c.category}</span>
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">{c.title}</h4>
                            <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-grow">
                                {c.description}
                            </p>
                            <div className="pt-6 border-t border-border mt-auto flex flex-wrap gap-2">
                                {c.stack.map((s) => (
                                    <span key={s} className="text-xs font-medium text-muted-foreground bg-secondary/60 border border-border rounded-full px-2.5 py-1">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
