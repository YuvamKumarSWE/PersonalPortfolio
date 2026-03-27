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
            description: "Engineered a multi-agent LangGraph orchestration pipeline with 6 specialized agents processing 4 input types in parallel. Reduced LLM API costs by consolidating study guide synthesis into a single Gemini call with 3-tier adaptive prompting. Won a $2,100 hackathon prize delivering a full-stack app with FastAPI, and hybrid PostgreSQL/MongoDB storage.",
            github: "https://github.com/YuvamKumarSWE/StudyForgeAI",
            deployed: "https://devpost.com/software/csgh5?_gl=1*3pyw0a*_gcl_au*NzQ2NTcyMzk5LjE3NjMwOTY3NDI.*_ga*MjAxMzg5NjM2Ni4xNzYzMDk2NzQy*_ga_0YHJK3Y10M*czE3NjU2ODI3ODUkbzIwJGcxJHQxNzY1NjgyNzg5JGo1NiRsMCRoMA..",
            technologies: ["Python", "Spring Boot", "LangGraph", "FastAPI", "Docker", "PostgreSQL", "MongoDB", "Google Gemini"],
            status: "Completed"
        },
        {
            id: 2,
            img: "/images/f1.png",
            title: "F1 Fantasy League",
            description: "Built a full-stack F1 fantasy platform with JWT auth, budget-constrained drafting, and captain 2x scoring using F1 data. Automated race-result processing via a cron pipeline calculating points with position/DNF modifiers across 20+ races. Integrated a context-aware AI chatbot, injecting race data, driver costs, standings, and teams with 83–100% test coverage.",
            github: "https://github.com/YuvamKumarSWE/F1FantasyLeague",
            deployed: "https://ykf1-fantasy.vercel.app/",
            technologies: ["TypeScript", "Node.js", "React", "MongoDB", "Express", "Redis", "Google Gemini"],
            status: "Live"
        },
        {
            id: 3,
            img: "/images/HireSignal.png",
            title: "HireSignal",
            description: "Built a real-time AI simulator using Gemini for role-tailored questions; deployed via Docker on AWS EC2 behind Nginx. Designed a multimodal voice pipeline integrating ElevenLabs, converting audio to transcribed answers over WebSockets. Automated CI/CD and monitored container health, latency, and uptime using Prometheus and Grafana dashboards.",
            github: "https://github.com/yeyeyeen/HireSignal",
            deployed: "https://devpost.com/software/hiresignal",
            technologies: ["React", "Node.js", "Express", "Gemini AI", "ElevenLabs", "AWS EC2", "Docker", "Nginx", "Prometheus", "Grafana"],
            status: "Completed"
        },
        {
            id: 4,
            img: "/images/note.png",
            title: "NOTEDLY AI",
            description: "An AI-powered note-taking application built with MERN stack and Python FastAPI. This tool helps users organize and enhance their notes with artificial intelligence capabilities, featuring smart categorization and content suggestions.",
            github: "https://github.com/YuvamKumarSWE/NOTEDLYAI",
            deployed: "",
            technologies: ["React", "Node.js", "Python", "FastAPI", "MongoDB", "AI/ML"],
            status: "Completed"
        },
        {
            id: 5,
            img: "/images/spacify.png",
            title: "Spacify",
            description: "A comprehensive space research data platform built with Node.js, Express, and Oracle DB. Spacify shortens space research and data collection by aggregating information from various sources into a unified interface. Features complex SQL queries and a responsive GUI for efficient data retrieval and analysis.",
            github: "https://github.com/YuvamKumarSWE/Spacify",
            deployed: "",
            technologies: ["Node.js", "Express", "Oracle DB", "JavaScript", "HTML/CSS"],
            status: "Completed"
        },
        {
            id: 6,
            img: "/images/clockedin.png",
            title: "Clocked In",
            description: "A group habit tracker designed to help friends stay consistent with their goals. Users check in daily with photos, maintain streaks together, and receive timely notifications. Built with React.js, Firebase, and TailwindCSS.",
            github: "https://github.com/YuvamKumarSWE/Group-Habit-Tracker",
            deployed: "https://groupclockedin.netlify.app/",
            technologies: ["React", "Firebase", "TailwindCSS", "JavaScript"],
            status: "Live"
        },
        {
            id: 7,
            img: "/images/stock.png",
            title: "AI Stock Predictor",
            description: "An intelligent stock prediction tool that uses AI algorithms to analyze market trends and provide investment insights. This tool helps users make informed decisions about their investments with real-time data analysis.",
            github: "https://github.com/YuvamKumarSWE/StockPredictor",
            deployed: "",
            technologies: ["Python", "Machine Learning", "Data Analysis", "APIs"],
            status: "Completed"
        },
        {
            id: 8,
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

    const getStatusStyle = (status) => {
        switch (status) {
            case "Live":
                return { color: '#0891B2', border: '1px solid #06B6D4', background: 'rgba(6,182,212,0.1)' };
            case "Completed":
                return { color: '#CA8A04', border: '1px solid #EAB308', background: 'rgba(234,179,8,0.1)' };
            default:
                return { color: '#52525B', border: '1px solid #71717A', background: 'rgba(0,0,0,0.05)' };
        }
    };

    // Cycle tech tag colors: all 6 Y2K colors (Darker)
    const tagColors = ['#D946EF', '#06B6D4', '#EAB308', '#EA580C', '#16A34A', '#DB2777'];

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
                    <p className="font-press-start text-[9px] tracking-widest uppercase mb-4" style={{ color: '#D946EF' }}>
                        _projects
                    </p>
                    <h1 className="font-vt323 text-6xl lg:text-8xl text-zinc-900 uppercase mb-6">
                        FEATURED<br />
                        <span className="text-outline-dark">PROJECTS</span>
                    </h1>
                    <p className="font-space-mono text-sm max-w-2xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                        {/* A showcase of innovative solutions built with modern technologies. */}
                        A showcase of innovative solutions built with modern technologies.
                    </p>
                </div>
            </motion.section>

            {/* Projects List */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 60, scaleX: 0.97 }}
                                whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <motion.div
                                    animate={{
                                        opacity: hoveredId === null || hoveredId === project.id ? 1 : 0.45,
                                    }}
                                    style={{
                                        border: '2px solid',
                                        borderColor: hoveredId === project.id ? '#D946EF' : 'rgba(217, 70, 239, 0.2)',
                                        boxShadow: hoveredId === project.id ? '4px 4px 0px #D946EF' : 'none',
                                        background: '#FFFFFF',
                                        overflow: 'hidden',
                                        transition: 'border-color 0.2s, box-shadow 0.2s',
                                    }}
                                >
                                    {/* Windows 98 Title Bar */}
                                    <div className="win98-titlebar">
                                        <div className="flex items-center gap-2">
                                            <span className="font-press-start text-[8px] text-zinc-900 opacity-80">
                                                {String(index + 1).padStart(2, "0")}_{project.title.toUpperCase().replace(/ /g, "_")}.EXE
                                            </span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <div style={{ width: 10, height: 10, background: '#FFE600', borderRadius: 0 }} />
                                            <div style={{ width: 10, height: 10, background: '#00FFFF', borderRadius: 0 }} />
                                            <div style={{ width: 10, height: 10, background: '#FF4444', borderRadius: 0 }} />
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Project Image */}
                                        <div className="relative lg:w-2/5 overflow-hidden" style={{ borderRight: '1px solid rgba(217, 70, 239, 0.15)' }}>
                                            <motion.img
                                                src={project.img}
                                                alt={project.title}
                                                className="w-full h-56 lg:h-full object-cover"
                                                whileHover={{ scale: 1.04, filter: 'hue-rotate(20deg) saturate(1.3) contrast(1.1)' }}
                                                transition={{ duration: 0.5 }}
                                                style={{ filter: 'saturate(0.85) contrast(1.1)' }}
                                            />
                                            {/* Scanline overlay on image */}
                                            <div className="absolute inset-0 pointer-events-none" style={{
                                                background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)',
                                            }} />
                                            <div className="absolute inset-0 hidden lg:block" style={{ background: 'linear-gradient(to right, transparent 70%, #FFFFFF)' }} />
                                            {/* Status Badge */}
                                            <div className="absolute top-3 left-3">
                                                <span
                                                    className="font-press-start text-[7px] uppercase tracking-wider px-2 py-1"
                                                    style={getStatusStyle(project.status)}
                                                >
                                                    {project.status}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-6 lg:p-8">
                                            {/* Title */}
                                            <h3
                                                className="font-vt323 text-3xl lg:text-4xl uppercase mb-3 transition-colors duration-200"
                                                style={{ color: hoveredId === project.id ? '#D946EF' : '#18181B' }}
                                            >
                                                {project.title}
                                            </h3>

                                            <p className="font-space-mono text-xs leading-relaxed mb-5 line-clamp-3" style={{ color: 'rgba(0,0,0,0.6)' }}>
                                                {project.description}
                                            </p>

                                            {/* Technologies — pixel badge tags */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="font-space-mono text-[10px] px-2 py-1 uppercase tracking-wider"
                                                        style={{
                                                            color: tagColors[i % tagColors.length],
                                                            border: `1px solid ${tagColors[i % tagColors.length]}40`,
                                                            background: `${tagColors[i % tagColors.length]}08`,
                                                        }}
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
                                                    whileHover={{ x: -1, y: -1 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="flex items-center gap-2 font-space-mono text-xs uppercase tracking-wider px-4 py-2 transition-all duration-150"
                                                    style={{
                                                        border: '1px solid rgba(255,0,255,0.4)',
                                                        color: 'rgba(255,0,255,0.7)',
                                                        boxShadow: '2px 2px 0 rgba(255,0,255,0.3)',
                                                    }}
                                                    onMouseEnter={e => {
                                                        e.currentTarget.style.borderColor = '#FF00FF';
                                                        e.currentTarget.style.color = '#FF00FF';
                                                        e.currentTarget.style.boxShadow = '3px 3px 0 #FF00FF';
                                                    }}
                                                    onMouseLeave={e => {
                                                        e.currentTarget.style.borderColor = 'rgba(255,0,255,0.4)';
                                                        e.currentTarget.style.color = 'rgba(255,0,255,0.7)';
                                                        e.currentTarget.style.boxShadow = '2px 2px 0 rgba(255,0,255,0.3)';
                                                    }}
                                                >
                                                    <FaGithub className="w-3 h-3" />
                                                    CODE
                                                </motion.a>
                                                {project.deployed && (
                                                    <motion.a
                                                        href={project.deployed}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ x: -1, y: -1 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        className="flex items-center gap-2 font-space-mono text-xs uppercase tracking-wider px-4 py-2 transition-all duration-150"
                                                        style={{
                                                            border: '2px solid #0891B2',
                                                            color: '#0891B2',
                                                            boxShadow: '3px 3px 0 #0891B2',
                                                            background: 'transparent',
                                                        }}
                                                        onMouseEnter={e => {
                                                            e.currentTarget.style.boxShadow = '5px 5px 0 #0891B2';
                                                        }}
                                                        onMouseLeave={e => {
                                                            e.currentTarget.style.boxShadow = '3px 3px 0 #0891B2';
                                                        }}
                                                    >
                                                        <FiExternalLink className="w-3 h-3" />
                                                        {["StudyForgeAI", "HireSignal"].includes(project.title) ? "DEVPOST" : "LIVE"}
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
                    <div
                        className="p-12 relative overflow-hidden"
                        style={{
                            background: '#1A0033',
                            border: '2px solid #FF00FF',
                            boxShadow: '6px 6px 0 #FF00FF',
                        }}
                    >
                        {/* Glow effect */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(255,0,255,0.05)' }} />

                        <h2 className="font-vt323 text-4xl lg:text-5xl text-white uppercase mb-6 relative z-10">
                            WANT TO <span style={{ color: '#FF00FF' }}>COLLABORATE</span>?
                        </h2>
                        <p className="font-space-mono text-sm mb-10 leading-relaxed max-w-xl mx-auto relative z-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
                            {"// I'm always excited to work on new projects and bring"}
                            <br />
                            {"// innovative ideas to life. Let's build something amazing."}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <motion.a
                                href="mailto:yuvamk.swe@gmail.com"
                                whileHover={{ x: -2, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="font-press-start text-[9px] uppercase tracking-wider px-8 py-4 pixel-border"
                                style={{ color: '#FF00FF', background: 'transparent' }}
                            >
                                START A PROJECT
                            </motion.a>
                            <motion.a
                                href="https://github.com/YuvamKumarSWE"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: -2, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="font-press-start text-[9px] uppercase tracking-wider px-8 py-4 pixel-border-cyan"
                                style={{ color: '#00FFFF', background: 'transparent' }}
                            >
                                VIEW ALL
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
