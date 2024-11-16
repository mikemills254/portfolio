import Mailer from "../assets/mailer.png"
import PropTypes from "prop-types"
import { useState } from "react";
import { ExternalLink, Code } from "lucide-react";


export const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
        <div 
            className="bg-gray-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden group">
                <img
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.image || Mailer}
                    alt={project.title}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>

            <div className="p-6 space-y-4">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center pt-4">
                    <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                    </a>
                    <a
                        href={project.codeUrl}
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Code size={16} />
                        <span>Source Code</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired
}
