import { useFadeIn } from '../hooks/use-fade-in';
import { SiGithub } from 'react-icons/si';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
import { Mail, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const ref = useFadeIn();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" data-testid="section-contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24" ref={ref}>
        
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-contact-label">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-contact-headline">Let's discuss your next major initiative.</h3>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
            I'm currently accepting select consulting engagements for Q3. If you have a hard problem that needs solving, I'd love to hear about it.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:hello@example.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group w-fit" data-testid="link-contact-email">
              <div className="w-10 h-10 rounded border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm">hello@example.com</span>
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group w-fit" data-testid="link-contact-linkedin">
              <div className="w-10 h-10 rounded border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <LinkedInIcon className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm">LinkedIn Profile</span>
            </a>
            
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group w-fit" data-testid="link-contact-github">
              <div className="w-10 h-10 rounded border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <SiGithub className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm">GitHub Architecture</span>
            </a>
          </div>
        </div>

        <div className="bg-secondary/30 p-8 rounded border border-border">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12" data-testid="form-contact-success">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Message Received</h4>
              <p className="text-muted-foreground text-sm">I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Name</label>
                <input
                  {...register('name')}
                  id="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full bg-background border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Jane Doe"
                  data-testid="input-contact-name"
                />
                {errors.name && <p id="name-error" role="alert" className="text-destructive text-xs mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Email</label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full bg-background border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="jane@company.com"
                  data-testid="input-contact-email"
                />
                {errors.email && <p id="email-error" role="alert" className="text-destructive text-xs mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full bg-background border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Tell me about the problem you're trying to solve..."
                  data-testid="input-contact-message"
                ></textarea>
                {errors.message && <p id="message-error" role="alert" className="text-destructive text-xs mt-1">{errors.message.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                data-testid="button-contact-submit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
