import { forwardRef, useState } from "react";
import profile from "../assets/profile.png";
import html from "../assets/html-5.png";
import tailwind from "../assets/tailwind.png";
import PropTypes from "prop-types"

const TechStackItem = ({ src, alt }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        <div className={`transform transition-all duration-300 ${isHovered ? 'scale-110 -translate-y-2' : ''}`}>
            <img
                src={src}
                alt={alt}
                className="w-16 h-16 filter brightness-90 group-hover:brightness-100"
            />
        </div>
        {isHovered && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded-md whitespace-nowrap">
                {alt}
            </div>
        )}
        </div>
    );
};

TechStackItem.propTypes = {
    src:  PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

const About = forwardRef(function About(props, ref) {
    const techStack = {
        frontend: [
            { src: html, alt: "HTML5" },
            { src: tailwind, alt: "Tailwind" },
            { src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", alt: "JavaScript" },
            { src: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000", alt: "React" },
            { src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", alt: "TypeScript" },
            { src: "https://img.icons8.com/?size=100&id=19284&format=png&color=000000", alt: "Next.js" },
            { src: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000", alt: "Bootstrap" },
            { src: "https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000", alt: "Tailwind CSS" },
            { src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000", alt: "Sass" },
            { src: "https://img.icons8.com/?size=100&id=dXToVsRCZyHh&format=png&color=15c213", alt: "Jest" },
        ],
        backend: [
            { src: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000", alt: "Node.js" },
            { src: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000", alt: "Express" },
            { src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000", alt: "Firebase" },
            { src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000", alt: "MongoDB" },
            { src: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000", alt: "Postgress" },
            { src: "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000", alt: "Mysql" },
            { src: "https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000", alt: "Laravel"}
        ],
        tools: [
            { src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000", alt: "Git" },
            { src: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000", alt: "GitHub" },
            { src: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000", alt: "Docker" },
        ],
    };

    return (
        <div ref={ref} className="min-h-screen w-screen p-8 lg:p-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Profile Section */}
                <section className="w-full lg:w-1/2 flex flex-col items-center space-y-8">
                    <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <img
                        src={profile}
                        alt="Profile"
                        className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover"
                    />
                    </div>
                    <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Full Stack Developer</h2>
                    <p className="text-gray-400 max-w-md">
                        Passionate about creating beautiful, functional, and user-centered digital experiences.
                        With 2+ years of experience in web development.
                    </p>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="w-full lg:w-1/2 space-y-12">
                    <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        My Tech Stack
                    </h1>
                    <p className="text-gray-400 mt-4">
                        Technologies I&apos;ve been working with recently
                    </p>
                    </div>

                    <div className="space-y-8">
                    {Object.entries(techStack).map(([category, tools]) => (
                        <div key={category} className="space-y-4">
                        <h3 className="text-xl font-semibold capitalize text-gray-300">
                            {category}
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8">
                            {tools.map((tool, index) => (
                            <TechStackItem
                                key={index}
                                src={tool.src}
                                alt={tool.alt}
                                category={category}
                            />
                            ))}
                        </div>
                        </div>
                    ))}
                    </div>
                </section>
                </div>
            </div>
        </div>
    );
});

export default About;