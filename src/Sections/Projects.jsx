import { forwardRef } from "react";
import GitHubCalendar from 'react-github-calendar';
import { Github, Calendar } from "lucide-react";
import Mailer from '../assets/mailer.png'
import WhatsappXno from '../assets/WhatsappXno.jpg'
import { ProjectCard } from "../Components/ProjectCard";
import Agency from "../assets/Agency.png"

const projects = [
    {
      title: "Mailer",
      description: "This is a tool i am building that will scrape contact information form a website including email and phone number and uses ai to generate email templates that will be used to send emails and also schedule",
      image: Mailer,
      techStack: ["React", "Node.js", "MongoDB", "Express", "Docker", "Socket-io"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
        title: "WhatsappXno",
        description: "This is a version of whatsapp that uses email instead of phone numbers, you send requests to your friend to create a connection.",
        image: WhatsappXno,
        techStack: ["React Native", "Firebase","Expo", "redux-persist", "redux"],
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        title: "Recruitement Agency Landing page",
        description: "This is a sample project description. Here you can briefly describe what the project is about.",
        image: Agency,
        techStack: ["React", "tailwind", "react-router-dom"],
        liveUrl: "#",
        codeUrl: "#"
    }
];

const Projects = forwardRef((props, ref) => {

    return (
        <div ref={ref} className="min-h-screen w-screen bg-gray-900 px-6 py-16 lg:p-20">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of projects that showcase my skills and experience in web development
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                <div className="space-y-8">
                    <div className="flex items-center justify-center gap-3">
                        <Calendar className="w-6 h-6 text-gray-400" />
                        <h3 className="text-2xl font-semibold text-white">GitHub Contributions</h3>
                    </div>
                
                    <div className="bg-gray-800/50 rounded-xl p-6 overflow-hidden">
                        <div className="space-y-6">
                        <div className="flex justify-center">
                            <GitHubCalendar
                                username="mikemills254"
                                colorScheme="light"
                                fontSize={12}
                                blockSize={14}
                                blockMargin={6}
                            />
                        </div>

                        <div className="flex justify-center gap-6 flex-wrap">
                            <a
                            href="https://github.com/mikemills254"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                            >
                            <Github size={20} />
                            <span>View GitHub Profile</span>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

Projects.displayName = "Projects";

export default Projects;