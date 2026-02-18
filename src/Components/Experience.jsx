import { motion } from 'framer-motion';
import ScrollProgress from './ui/ScrollProgress';
import { useState } from 'react';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            company: "Royal Bank of Canada",
            position: "Software Developer Intern",
            duration: "Sept 2025 – Dec 2025",
            location: "Toronto, ON",
            description: [
                "Engineered secure file download Spring Boot features using AWS S3 for 1000+ clients with role-based permission validation and optimizing retrieval logic to reduce average zip download time by 45%.",
                "Expanded the Spring Boot backend and MySQL database to support 20 new wire-payment fields and built a MongoDB module for customer interest data with REST endpoints, ensuring system stability.",
                "Refactored old presentation logic and introduced new UI components to improve payment activity rendering, resulting in cleaner architecture and improved maintainability."
            ],
            technologies: ["Spring Boot", "AWS S3", "MySQL", "MongoDB", "REST APIs", "Java"]
        },
        {
            id: 2,
            company: "UBC Applied Machine Learning and Arts",
            position: "Software Developer",
            duration: "Jan 2025 – Aug 2025",
            location: "Vancouver, BC",
            description: [
                "Designed and deployed a full-stack Python video platform that automated strategic video trimming and reduced content duration by 75%, while significantly optimizing flicker between clips to improve video quality.",
                "Improved Nvidia ASR transcription by adding multi-threading, applying an efficient chunking strategy, and reducing model spin-up time, cutting transcription time by 30%.",
                "Contributed to setting up multiple microservices and deployed ML services on Hugging Face Spaces with Gradio, enabling efficient real-time access for users."
            ],
            technologies: ["Python", "Nvidia ASR", "Multi-threading", "Gradio", "Hugging Face Spaces", "Microservices"]
        },
        {
            id: 3,
            company: "Collin College",
            position: "Math Research Assistant",
            duration: "Sept 2023 – May 2024",
            location: "Frisco, TX",
            description: [
                "Achieved 99% accuracy in calculus simulation model validation using computational methods, with resulting visual tools adopted by 200+ students.",
                "Produced high-accuracy models using AutoCAD and simulation software, and presented research findings at an academic conference to advance adoption of technological teaching aids."
            ],
            technologies: ["Computational Methods", "AutoCAD", "Simulation Software", "Research", "Data Visualization"]
        }
    ];

    const [hoveredId, setHoveredId] = useState(null);

    return (
        <>
            <ScrollProgress />
            <div className="min-h-screen py-20 px-6">
                <div className="max-w-5xl mx-auto pt-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <p className="text-neon-green font-mono text-sm tracking-[0.3em] uppercase mb-4">
                            _experience
                        </p>
                        <h1 className="font-grotesk font-bold text-5xl lg:text-7xl text-white uppercase mb-6">
                            Professional
                            <br />
                            <span className="text-outline">Experience</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                            My journey as a software engineer, building innovative solutions and growing through diverse experiences.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green via-gray-700 to-transparent" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredId(exp.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="relative mb-12 ml-8 md:ml-20"
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    className="absolute -left-[2.15rem] md:-left-[3.15rem] top-8 w-3 h-3 rounded-full border-2 border-neon-green"
                                    animate={{
                                        backgroundColor: hoveredId === exp.id ? "#00F050" : "transparent",
                                        boxShadow: hoveredId === exp.id ? "0 0 15px rgba(0, 240, 80, 0.6)" : "none",
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Experience Card */}
                                <motion.div
                                    animate={{
                                        opacity: hoveredId === null || hoveredId === exp.id ? 1 : 0.35,
                                        borderColor: hoveredId === exp.id ? "rgba(0, 240, 80, 0.3)" : "rgba(55, 65, 81, 1)",
                                    }}
                                    whileHover={{
                                        boxShadow: "0 0 30px rgba(0, 240, 80, 0.08)",
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-dark-surface rounded-2xl p-8 border border-gray-800 transition-all duration-300"
                                >
                                    {/* Header Row */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                        <div>
                                            <div className="flex items-baseline gap-3 mb-1">
                                                <span className="text-neon-green/40 font-mono text-sm">
                                                    _{String(index + 1).padStart(2, "0")}
                                                </span>
                                                <h3 className="font-grotesk font-bold text-2xl text-white uppercase">
                                                    {exp.position}
                                                </h3>
                                            </div>
                                            <h4 className="text-neon-green font-medium text-lg">
                                                {exp.company}
                                            </h4>
                                        </div>
                                        <div className="mt-2 md:mt-0 md:text-right flex-shrink-0">
                                            <p className="text-gray-400 font-mono text-sm">{exp.duration}</p>
                                            <p className="text-gray-600 text-sm">{exp.location}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <ul className="space-y-3 mb-6">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 bg-neon-green/60 rounded-full mt-2.5 flex-shrink-0" />
                                                <span className="text-gray-400 leading-relaxed text-sm">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-800 text-gray-400 rounded-lg text-xs font-medium border border-gray-700 hover:border-neon-green/30 hover:text-neon-green transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
}
