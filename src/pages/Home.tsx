import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import Work from '@/sections/Work';
import Expertise from '@/sections/Expertise';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';
import Footer from '@/components/footer';
import Navbar from '@/components/nabvar';

import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mike Mills | Full Stack Developer & AI Engineer</title>
        <meta name="description" content="Portfolio of Mike Mills Ngaira, a Full Stack Developer and AI Engineer specializing in enterprise AI, scalable web applications, and technical leadership." />
        <link rel="canonical" href="https://mills.co.ke/" />
      </Helmet>
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
    </>
  );
}
