import { Helmet } from 'react-helmet-async';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';
import Work from '../sections/work';

export default function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Portfolio | Mills AI Agency</title>
                <meta name="description" content="View our selected AI & RAG case studies and engineering work." />
                <link rel="canonical" href="https://mills.co.ke/portfolio" />
            </Helmet>
            <main className="min-h-dvh w-full flex flex-col relative bg-background" data-testid="page-portfolio">
                <Navbar />

                <div className="grow pt-10">
                    <Work />
                </div>

                <Footer />
            </main>
        </>
    );
}
