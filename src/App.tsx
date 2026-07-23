import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async"
import { Toaster } from "react-hot-toast"
import { useLocation, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import About from "./pages/about";
import CaseStudy from "./pages/case-study";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Services from "./pages/services";

const queryClient = new QueryClient();

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App() {
    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <ScrollToTop />
                    <Toaster />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/work/:slug" element={<CaseStudy />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </TooltipProvider>
            </QueryClientProvider>
        </HelmetProvider>
    )
}
