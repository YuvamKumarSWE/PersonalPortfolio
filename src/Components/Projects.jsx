import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../index.css";
import { motion } from "framer-motion";
import ScrollProgress from "./ui/ScrollProgress";

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "Live":
                return "bg-green-100 text-green-800";
            case "In Development":
                return "bg-blue-100 text-blue-800";
            case "Completed":
                return "bg-purple-100 text-purple-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <ScrollProgress />

            {/* Header Section */}
            <motion.section
                className="pt-32 pb-16 px-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Featured Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A showcase of innovative solutions and creative applications built with modern technologies.
                        Each project represents a unique challenge solved through careful planning and execution.
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
                </div>
            </motion.section>

            {/* Projects Grid */}
            <motion.section
                className="pb-20 px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Quick Action Buttons */}
                                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
                                        >
                                            <FaGithub className="w-5 h-5 text-gray-700" />
                                        </motion.a>
                                        {project.deployed && (
                                            <motion.a
                                                href={project.deployed}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
                                            >
                                                <FiExternalLink className="w-5 h-5 text-blue-600" />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                                        >
                                            <FaGithub className="mr-2" />
                                            View Code
                                        </motion.a>
                                        {project.deployed && (
                                            <motion.a
                                                href={project.deployed}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                            >
                                                <FiExternalLink className="mr-2" />
                                                {project.title === "StudyForgeAI" ? "DevPost" : "Live Demo"}
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="py-20 px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-2xl p-12 shadow-lg">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Want to Collaborate?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            I&apos;m always excited to work on new projects and bring innovative ideas to life.
                            Let&apos;s build something amazing together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="mailto:yuvamk.swe@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                Start a Project
                            </motion.a>
                            <motion.a
                                href="https://github.com/YuvamKumarSWE"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
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
