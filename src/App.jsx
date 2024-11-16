import Navigation from "./Components/Navigation";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import { useRef } from "react";
import Contact from "./Sections/Contact";
import WhatsAppFloat from "./Components/WhatsappFloat";
import { Toaster } from "react-hot-toast"



export default function App() {
    const home = useRef();
    const about = useRef();
    const projects = useRef();
    const contact = useRef()

    const handleNavigation = (section) => {
        if (section === 'home') {
            home.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'about') {
            about.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'projects') {
            projects.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === "contact"){
            contact.current.scrollIntoView({ behavior: 'smooth' })
        }
    };

    return (
        <div className="bg-gray-900 flex flex-col items-center overflow-hidden space-y-10">
            <Navigation handleNavigation={handleNavigation} />
            <Home ref={home} />
            <About ref={about} />
            <Projects ref={projects} />
            <Contact ref={contact}/>
            <WhatsAppFloat/>
            <Toaster/>
        </div>
    );
}
