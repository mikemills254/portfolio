import { Seo } from '../components/seo';
import Contact from '../sections/contact';
import Engagement from '../sections/engagement';
import Expertise from '../sections/expertise';
import Hero from '../sections/hero';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';

export default function Home() {
    return (
        <>
            <Seo
                title="Mills | AI & RAG Engineer — Nairobi, Kenya"
                description="AI & RAG engineer based in Nairobi, Kenya, building production Retrieval-Augmented Generation pipelines, LLM integrations, and full-stack systems for teams across East Africa and remote."
                canonical="https://mills.co.ke/"
            />
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
