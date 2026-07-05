import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import Work from '@/sections/Work';
import Expertise from '@/sections/Expertise';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';
import Footer from '@/components/footer';
import Navbar from '@/components/nabvar';

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
