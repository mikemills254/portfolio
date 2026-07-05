import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Work } from '@/components/Work';
import { Expertise } from '@/components/Expertise';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/nabvar';

export default function Home() {
  return (
    <main className="min-h-dvh w-full flex flex-col relative" data-testid="page-home">
      <Navbar />

      <div className="grow">
        <Hero />
        <Stats />
        <Work />
        <Expertise />
        <Testimonials />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
