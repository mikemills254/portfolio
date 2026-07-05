import { useFadeIn } from '../hooks/use-fade-in';

const testimonials = [
  {
    quote: "Let Craig David do the walking, Michael won’t. When something in the system isn’t right, he stays at his workstation until it is. He sticks with problems and works through them until they’re resolved. That level of care and attention is exactly what a team needs.",
    author: "Frankline Were",
    title: "DevOps Engineer | AWS · Docker · CI/CD | Python Backend | KCNA Certified",
    company: "Colmusk Limited"
  }
];

export default function Testimonials() {
  const ref = useFadeIn();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-foreground/60 mb-4" data-testid="text-testimonials-label">Client Feedback</h2>
          <h3 className="text-3xl font-bold tracking-tight" data-testid="text-testimonials-headline">Trusted by technical leaders.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col p-8 border border-primary-foreground/20 rounded bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors" data-testid={`card-testimonial-${i}`}>
              <div className="text-4xl text-primary-foreground/20 font-serif leading-none mb-4">"</div>
              <p className="text-primary-foreground/90 text-sm leading-relaxed mb-8 flex-grow">
                {t.quote}
              </p>
              <div className="flex flex-col border-t border-primary-foreground/20 pt-6">
                <span className="font-bold text-sm">{t.author}</span>
                <span className="text-xs text-primary-foreground/70 mt-1">{t.title}, {t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
