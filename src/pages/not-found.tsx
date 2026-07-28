import { Seo } from '../components/seo';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';

export default function NotFound() {
    return (
        <>
            <Seo
                title="Page Not Found | Mills"
                description="The page you're looking for may have moved or never existed."
                noindex
            />
            <main className="min-h-dvh w-full flex flex-col relative" data-testid="page-not-found">
                <Navbar />

                <div className="grow flex items-center justify-center px-6 md:px-12 py-32 text-center">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4">404</p>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            This page doesn't exist.
                        </h1>
                        <p className="text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto">
                            The page you're looking for may have moved or never existed. Let's get you back
                            somewhere useful.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors group"
                            data-testid="link-not-found-home"
                        >
                            Back to Home
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}
