import { Helmet } from 'react-helmet-async';
import Contact from '../sections/contact';
import Engagement from '../sections/engagement';
import Expertise from '../sections/expertise';
import Hero from '../sections/hero';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Mills | AI & RAG Engineer — Nairobi, Kenya</title>
                <meta name="description" content="AI & RAG engineer based in Nairobi, Kenya, building production Retrieval-Augmented Generation pipelines, LLM integrations, and full-stack systems for teams across East Africa and remote." />
                <link rel="canonical" href="https://mills.co.ke/" />
            </Helmet>
            <main className="min-h-dvh w-full flex flex-col relative" data-testid="page-home">
                <Navbar />

                <div className="grow">
                    <Hero />
                    <Expertise />
                    <Engagement />
                    <Contact />
                </div>

                <Footer />
            </main>
        </>
    );
}
