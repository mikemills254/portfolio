import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Work } from '@/components/Work';
import { Expertise } from '@/components/Expertise';
import { Timeline } from '@/components/Timeline';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-[100dvh] w-full flex flex-col relative" data-testid="page-home">
      <Navigation />
      
      <div className="flex-grow">
        <Hero />
        <Stats />
        <Work />
        <Expertise />
        <Timeline />
        <Testimonials />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
