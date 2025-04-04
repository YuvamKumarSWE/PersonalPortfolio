import NavBar from "./NavBarComponents/NavBar";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../index.css";
import { motion } from "framer-motion";
import ScrollProgress from "./ui/ScrollProgress";

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
            img: "/images/comingsoon.jpg",
            title: "Spacify",
            description: "A comprehensive space research data platform built with Node.js, Express, and Oracle DB. Spacify shortens space research and data collection by aggregating information from various sources into a unified interface. Features complex SQL queries and a responsive GUI for efficient data retrieval and analysis.",
            github: "https://github.com/YuvamKumarSWE/Spacify",
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
            img: "/images/comingsoon.jpg",
            title: "Anime AI Recommendation System",
            description: "A personalized anime recommendation platform that uses machine learning algorithms to suggest anime based on user preferences. Built with the MERN stack (MongoDB, Express, React, Node.js) and integrates content-based filtering techniques.",
            github: "https://github.com/YuvamKumarSWE/MERN-Anime-Website",
            deployed: ""
        },
        {
            img: "/images/stock.png",
            title: "AI Stock Predictor",
            description: "An intelligent stock prediction tool that uses AI algorithms to analyze market trends and provide investment insights. This tool helps users make informed decisions about their investments.",
            github: "https://github.com/YuvamKumarSWE/StockPredictor",
            deployed: ""
        }
    ];

   
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 }}
    };
    
    const staggerContainer = {
        initial: { opacity: 0 },
        animate: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                duration: 0.8
            }
        },
        hover: { 
            y: -10, 
            boxShadow: "0 20px 30px rgba(0,0,0,0.15)", 
            transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 15 
            }
        }
    };

    const imageVariants = {
        hover: { 
            scale: 1.05, 
            transition: { 
                duration: 0.3 
            }
        }
    };

    const buttonVariants = {
        hover: { 
            scale: 1.05, 
            transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
            }
        },
        tap: { 
            scale: 0.95 
        }
    };

    return (
        <>
            <div className="background"></div>
            <ScrollProgress />
            <NavBar />
            <motion.div 
                className="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div 
                    className="text-center my-16"
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                >
                    <h1 className="text-4xl font-bold mb-6">PROJECTS</h1>
                    <motion.div 
                        className="w-16 h-1 bg-purple-500 mx-auto mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: 64 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                    <motion.p 
                        className="max-w-3xl mx-auto text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Here are some of the projects I have built, showcasing a mix of AI, full-stack development, and problem-solving applications.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="flex flex-col gap-32 max-w-7xl mx-auto px-4 pb-20"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16 px-5 py-5`}
                            variants={cardVariants}
                            whileHover="hover"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div 
                                className="w-full md:w-3/5 overflow-hidden rounded-lg shadow-xl"
                                whileHover="hover"
                            >
                                <motion.img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-auto rounded-lg object-cover transform"
                                    variants={imageVariants}
                                />
                            </motion.div>

                            <div className="w-full md:w-2/5 flex flex-col gap-6">
                                <motion.h2 
                                    className="text-4xl font-bold"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    {project.title}
                                </motion.h2>
                                <motion.p 
                                    className="text-lg text-black"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    {project.description}
                                </motion.p>

                                <motion.div 
                                    className="flex gap-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 hover:bg-black text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <FaGithub size={22} /> GitHub
                                    </motion.a>
                                    {project.deployed && (
                                        <motion.a
                                            href={project.deployed}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all"
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <FiExternalLink size={22} /> Live Demo
                                        </motion.a>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
}
