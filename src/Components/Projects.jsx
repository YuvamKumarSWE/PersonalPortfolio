import NavBar from "./NavBarComponents/NavBar";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../index.css";

export default function Projects() {
    const projects = [
        {
            img: "/images/comingsoon.jpg",
            title: "NOTEDLY AI",
            description: "An AI-powered note-taking application built with MERN stack and Python FastAPI. This tool helps users organize and enhance their notes with artificial intelligence capabilities.",
            github: "https://github.com/YuvamKumarSWE/NOTEDLYAI",
            deployed: ""
        },
        {
            img: "/images/clockedin.png",
            title: "Clocked In",
            description: "A group habit tracker designed to help friends stay consistent with their goals. Users check in daily with photos, maintain streaks together, and receive timely notifications. Built with React.js, Firebase, and TailwindCSS.",
            github: "https://github.com/YuvamKumarSWE/Group-Habit-Tracker",
            deployed: "https://groupclockedin.netlify.app/"
        },
        {
            img: "/images/stock.png",
            title: "AI Stock Predictor",
            description: "An intelligent stock prediction tool that uses AI algorithms to analyze market trends and provide investment insights. This tool helps users make informed decisions about their investments.",
            github: "https://github.com/YuvamKumarSWE/StockPredictor",
            deployed: ""
        }
    ];

    return (
        <>
            <div className="background"></div>
            <NavBar />
            <div className="content">
                <div className="text-center my-16">
                    <h1 className="text-4xl font-bold mb-6">PROJECTS</h1>
                    <div className="w-16 h-1 bg-purple-500 mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-lg">
                        Here are some of the projects I’ve built, showcasing a mix of AI, full-stack development, and problem-solving applications.
                    </p>
                </div>

                <div className="flex flex-col gap-32 max-w-7xl mx-auto px-6 pb-20">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16`}>
                            <div className="w-full md:w-3/5">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-auto rounded-lg shadow-xl object-cover"
                                />
                            </div>

                            <div className="w-full md:w-2/5 flex flex-col gap-6">
                                <h2 className="text-4xl font-bold">{project.title}</h2>
                                <p className="text-lg text-black">{project.description}</p>

                                <div className="flex gap-6">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 hover:bg-black text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all"
                                    >
                                        <FaGithub size={22} /> GitHub
                                    </a>
                                    {project.deployed && (
                                        <a
                                            href={project.deployed}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all"
                                        >
                                            <FiExternalLink size={22} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
