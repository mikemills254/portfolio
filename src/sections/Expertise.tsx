import { useFadeIn } from '../hooks/use-fade-in';

const areas = [
  {
    title: "Technical Leadership",
    description: "Aligning engineering output with business objectives. I build high-performing teams, establish rigorous engineering standards, and navigate complex organizational changes."
  },
  {
    title: "Enterprise Software",
    description: "Designing systems that scale gracefully. I architect solutions with fault tolerance, deep observability, and long-term maintainability as first principles."
  },
  {
    title: "AI Applications",
    description: "Moving beyond prototype to production. I integrate machine learning and LLM capabilities into existing products with a focus on reliability, latency, and cost economics."
  },
  {
    title: "Cloud Architecture",
    description: "Optimizing infrastructure for the realities of scale. I design pragmatic cloud-native architectures that balance performance with operational overhead."
  },
  {
    title: "Full Stack Development",
    description: "Delivering polished, complete products. From robust backend data pipelines to highly crafted frontend interfaces that users trust."
  },
  {
    title: "Retrieval-Augmented Generation",
    description: "Building production-grade knowledge systems. I design robust RAG pipelines that synthesize proprietary data accurately and safely at scale."
  }
];

export default function Expertise() {
  const ref = useFadeIn();

  return (
    <section id="expertise" className="py-24 md:py-32 px-6 md:px-12 bg-secondary/20 border-y border-border/30" data-testid="section-expertise">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="mb-16 md:w-1/2">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-expertise-label">Areas of Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" data-testid="text-expertise-headline">Solving the right problems.</h3>
          <p className="text-muted-foreground leading-relaxed">
            I don't just write code; I deliver business value through technical excellence. My focus is entirely on outcomes that drive growth and stability.
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
