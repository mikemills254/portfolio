import { Helmet } from 'react-helmet-async';
import Contact from '../sections/contact';
import Expertise from '../sections/expertise';
import Hero from '../sections/hero';
import Testimonials from '../sections/testimonials';
import Work from '../sections/work';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';

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
