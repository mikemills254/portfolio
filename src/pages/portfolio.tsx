import { Seo } from '../components/seo';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';
import Work from '../sections/work';

export default function Portfolio() {
    return (
        <>
            <Seo
                title="Portfolio | Mills AI Agency"
                description="View our selected AI & RAG case studies and engineering work."
                canonical="https://mills.co.ke/portfolio"
            >
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mills.co.ke/' },
                            { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://mills.co.ke/portfolio' },
                        ],
                    })}
                </script>
            </Seo>
            <main className="min-h-dvh w-full flex flex-col relative bg-background" data-testid="page-portfolio">
                <Navbar />

                <div className="grow pt-10">
                    <h1 className="sr-only">Portfolio — AI &amp; RAG engineering case studies</h1>
                    <Work />
                </div>

                <Footer />
            </main>
        </>
    );
}
