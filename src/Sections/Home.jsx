import { forwardRef, useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Code, Smartphone, Database } from "lucide-react";

const Home = forwardRef((props, ref) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20,
                y: (e.clientY / window.innerHeight) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const skills = [
        { icon: <Code className="w-6 h-6 text-white" color="white" />, text: "Full Stack Development" },
        { icon: <Smartphone className="w-6 h-6" color="white" />, text: "Application Development" },
        { icon: <Database className="w-6 h-6" color="white" />, text: "Cloud Architecture" },
    ];

    return (
        <div
            ref={ref}
            className="w-screen min-h-screen flex items-center justify-center overflow-hidden relative"
        >
            <div 
                className="absolute inset-0 "
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    transition: "transform 0.2s ease-out",
                }}
            />

            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="20" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <section className="relative flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 pt-28 sm:pt-36 lg:pt-36 space-y-10 z-10">
                <div className={`text-center space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        Hi, I&apos;m{" "}
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                            Mike Mills
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        I&apos;m passionate about creating innovative digital products. Whether it&apos;s crafting stunning user experiences
                        or building highly scalable applications, I turn ideas into reality.
                    </p>
                </div>

                <div className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <div className="p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-200">{skill.text}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`flex space-x-6 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <a
                        href="https://github.com/mikemills254"
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mills-mike/"
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://twitter.com/SweetDzaddy?t=tlxqa-fpaIVg_Y8ZMG-0pA&s=09"
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter className="w-6 h-6" />
                    </a>
                </div>

                {/* <button className="group px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold flex items-center space-x-2 hover:opacity-90 transition-opacity">
                    <span>View My Work</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button> */}
            </section>
        </div>
    );
});

Home.displayName = "Home";

export default Home;