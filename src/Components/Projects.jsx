import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../index.css";
import { motion } from "framer-motion";
import ScrollProgress from "./ui/ScrollProgress";
import { useState } from "react";

export default function Projects() {
    const projects = [
        {
            id: 1,
            img: "/images/studyforge.png",
            title: "StudyForgeAI",
            description: "A sophisticated AI-powered educational platform that revolutionizes how students and professionals synthesize knowledge from diverse information sources. Leverages cutting-edge natural language processing and Google's Gemini 2.5 Flash Lite AI model to automatically generate comprehensive, well-structured study guides from PDFs, web articles, YouTube videos, and raw text inputs—all through an elegant, modern web interface.",
            github: "https://github.com/YuvamKumarSWE/StudyForgeAI",
            deployed: "https://devpost.com/software/csgh5?_gl=1*3pyw0a*_gcl_au*NzQ2NTcyMzk5LjE3NjMwOTY3NDI.*_ga*MjAxMzg5NjM2Ni4xNzYzMDk2NzQy*_ga_0YHJK3Y10M*czE3NjU2ODI3ODUkbzIwJGcxJHQxNzY1NjgyNzg5JGo1NiRsMCRoMA..",
            technologies: ["React", "Java", "Spring Boot", "Python", "LangChain", "MongoDB", "PostgreSQL", "Docker"],
            status: "Completed"
        },
        {
            id: 2,
            img: "/images/f1.png",
            title: "F1 Fantasy League",
            description: "Engineered a full-stack F1 Fantasy League platform using the MERN stack and TypeScript, enabling real-time user interactions, dynamic leaderboards, and seamless team management. Designed and implemented robust RESTful APIs in Node.js and Express for secure authentication and scalable backend infrastructure. Integrated advanced data visualization and responsive React UI components for an engaging fantasy team selection experience across devices.",
            github: "https://github.com/YuvamKumarSWE/F1FantasyLeague",
            deployed: "https://ykf1-fantasy.vercel.app/",
            technologies: ["TypeScript", "Node.js", "React", "MongoDB", "Express", "MERN"],
            status: "Live"
        },
        {
            id: 3,
            img: "/images/note.png",
            title: "NOTEDLY AI",
            description: "An AI-powered note-taking application built with MERN stack and Python FastAPI. This tool helps users organize and enhance their notes with artificial intelligence capabilities, featuring smart categorization and content suggestions.",
            github: "https://github.com/YuvamKumarSWE/NOTEDLYAI",
            deployed: "",
            technologies: ["React", "Node.js", "Python", "FastAPI", "MongoDB", "AI/ML"],
            status: "Completed"
        },
        {
            id: 4,
            img: "/images/spacify.png",
            title: "Spacify",
            description: "A comprehensive space research data platform built with Node.js, Express, and Oracle DB. Spacify shortens space research and data collection by aggregating information from various sources into a unified interface. Features complex SQL queries and a responsive GUI for efficient data retrieval and analysis.",
            github: "https://github.com/YuvamKumarSWE/Spacify",
            deployed: "",
            technologies: ["Node.js", "Express", "Oracle DB", "JavaScript", "HTML/CSS"],
            status: "Completed"
        },
        {
            id: 5,
            img: "/images/clockedin.png",
            title: "Clocked In",
            description: "A group habit tracker designed to help friends stay consistent with their goals. Users check in daily with photos, maintain streaks together, and receive timely notifications. Built with React.js, Firebase, and TailwindCSS.",
            github: "https://github.com/YuvamKumarSWE/Group-Habit-Tracker",
            deployed: "https://groupclockedin.netlify.app/",
            technologies: ["React", "Firebase", "TailwindCSS", "JavaScript"],
            status: "Live"
        },
        {
            id: 6,
            img: "/images/stock.png",
            title: "AI Stock Predictor",
            description: "An intelligent stock prediction tool that uses AI algorithms to analyze market trends and provide investment insights. This tool helps users make informed decisions about their investments with real-time data analysis.",
            github: "https://github.com/YuvamKumarSWE/StockPredictor",
            deployed: "",
            technologies: ["Python", "Machine Learning", "Data Analysis", "APIs"],
            status: "Completed"
        },
        {
            id: 7,
            img: "/images/anime.png",
            title: "Anime AI Recommendation System",
            description: "A personalized anime recommendation platform that uses machine learning algorithms to suggest anime based on user preferences. Built with the MERN stack (MongoDB, Express, React, Node.js) and integrates content-based filtering techniques.",
            github: "https://github.com/YuvamKumarSWE/MERN-Anime-Website",
            deployed: "",
            technologies: ["MongoDB", "Express", "React", "Node.js", "Machine Learning"],
            status: "Completed"
        },
    ];

    const [hoveredId, setHoveredId] = useState(null);

    const getStatusColor = (status) => {
        switch (status) {
            case "Live":
                return "bg-neon-green/20 text-neon-green border border-neon-green/30";
            case "In Development":
                return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
            case "Completed":
                return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
            default:
                return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
        }
    };

    return (
        <div className="min-h-screen">
            <ScrollProgress />

            {/* Header */}
            <motion.section
                className="pt-32 pb-20 px-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto">
                    <p className="text-neon-green font-mono text-sm tracking-[0.3em] uppercase mb-4">
                        _projects
                    </p>
                    <h1 className="font-grotesk font-bold text-5xl lg:text-7xl text-white uppercase mb-6">
                        Featured
                        <br />
                        <span className="text-outline">Projects</span>
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                        A showcase of innovative solutions and creative applications
                        built with modern technologies. Each project represents a
                        unique challenge solved through careful engineering.
                    </p>
                </div>
            </motion.section>

            {/* Projects List — Large-scale vertical list inspired by tajmirul.site */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="group"
                            >
                                <motion.div
                                    className="bg-dark-surface border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500"
                                    animate={{
                                        opacity: hoveredId === null || hoveredId === project.id ? 1 : 0.3,
                                        borderColor: hoveredId === project.id ? "rgba(0, 240, 80, 0.3)" : "rgba(55, 65, 81, 1)",
                                    }}
                                    whileHover={{
                                        boxShadow: "0 0 30px rgba(0, 240, 80, 0.1)",
                                    }}
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Project Image */}
                                        <div className="relative lg:w-2/5 overflow-hidden">
                                            <motion.img
                                                src={project.img}
                                                alt={project.title}
                                                className="w-full h-64 lg:h-full object-cover"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.6 }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-surface/80 hidden lg:block" />

                                            {/* Status Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(project.status)}`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-8">
                                            {/* Number + Title */}
                                            <div className="flex items-baseline gap-4 mb-4">
                                                <span className="text-neon-green/40 font-mono text-sm">
                                                    _{String(index + 1).padStart(2, "0")}
                                                </span>
                                                <h3 className="font-grotesk font-bold text-2xl lg:text-3xl text-white uppercase group-hover:text-neon-green transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <p className="text-gray-500 mb-6 leading-relaxed text-sm lg:text-base line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-gray-800 text-gray-400 rounded-lg text-xs font-medium border border-gray-700 hover:border-neon-green/30 hover:text-neon-green transition-all duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-3">
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center gap-2 px-5 py-2.5 border border-gray-700 text-white rounded-lg hover:border-neon-green hover:text-neon-green transition-all duration-300 text-sm font-medium"
                                                >
                                                    <FaGithub className="w-4 h-4" />
                                                    Code
                                                </motion.a>
                                                {project.deployed && (
                                                    <motion.a
                                                        href={project.deployed}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 240, 80, 0.4)" }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center gap-2 px-5 py-2.5 bg-neon-green text-dark-bg rounded-lg font-bold text-sm uppercase tracking-wide"
                                                    >
                                                        <FiExternalLink className="w-4 h-4" />
                                                        {project.title === "StudyForgeAI" ? "DevPost" : "Live"}
                                                    </motion.a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="py-32 px-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-dark-surface border border-gray-800 rounded-2xl p-12 relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-neon-green/5 rounded-full blur-3xl" />

                        <h2 className="font-grotesk font-bold text-4xl lg:text-5xl text-white uppercase mb-6 relative z-10">
                            Want to <span className="text-neon-green">Collaborate</span>?
                        </h2>
                        <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-xl mx-auto relative z-10">
                            I&apos;m always excited to work on new projects and bring
                            innovative ideas to life. Let&apos;s build something amazing
                            together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <motion.a
                                href="mailto:yuvamk.swe@gmail.com"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 240, 80, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-neon-green text-dark-bg font-bold rounded-lg uppercase tracking-wider text-sm"
                            >
                                Start a Project
                            </motion.a>
                            <motion.a
                                href="https://github.com/YuvamKumarSWE"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, borderColor: "#00F050" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border border-gray-600 text-white font-bold rounded-lg hover:text-neon-green transition-all duration-300 uppercase tracking-wider text-sm"
                            >
                                View All Projects
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
