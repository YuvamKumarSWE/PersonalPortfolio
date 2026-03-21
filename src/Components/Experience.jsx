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
            technologies: ["Spring Boot", "AWS S3", "MySQL", "MongoDB", "REST APIs", "Java"],
            accent: "#D946EF",
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
            technologies: ["Python", "Nvidia ASR", "Multi-threading", "Gradio", "Hugging Face Spaces", "Microservices"],
            accent: "#0891B2",
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
            technologies: ["Computational Methods", "AutoCAD", "Simulation Software", "Research", "Data Visualization"],
            accent: "#CA8A04",
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
                        <p className="font-press-start text-[9px] tracking-widest uppercase mb-4" style={{ color: '#FF00FF' }}>
                            _experience
                        </p>
                        <h1 className="font-vt323 text-6xl lg:text-8xl text-zinc-900 uppercase mb-6">
                            PROFESSIONAL<br />
                            <span className="text-outline-dark">EXPERIENCE</span>
                        </h1>
                        <p className="font-space-mono text-sm max-w-2xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                            {"// My journey as a software engineer, building innovative"}
                            <br />
                            {"// solutions and growing through diverse experiences."}
                        </p>
                    </motion.div>

                    {/* ASCII Divider */}
                    <div className="ascii-divider text-sm mb-12">===== WORK HISTORY =====</div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Vertical Timeline Line — dashed magenta */}
                        <div
                            className="absolute left-0 md:left-8 top-0 bottom-0"
                            style={{
                                width: '2px',
                                borderLeft: '2px dashed rgba(255,0,255,0.35)',
                            }}
                        />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -60, skewY: 1 }}
                                whileInView={{ opacity: 1, x: 0, skewY: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredId(exp.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="relative mb-10 ml-8 md:ml-20"
                            >
                                {/* Timeline Dot — square for Y2K */}
                                <motion.div
                                    className={`absolute -left-[2.2rem] md:-left-[3.2rem] top-8${hoveredId === exp.id ? ' ping-dot' : ''}`}
                                    style={{
                                        width: 12,
                                        height: 12,
                                        border: `2px solid ${exp.accent}`,
                                        background: hoveredId === exp.id ? exp.accent : 'transparent',
                                        boxShadow: hoveredId === exp.id ? `0 0 12px ${exp.accent}` : 'none',
                                        transition: 'all 0.25s ease',
                                    }}
                                />

                                {/* Experience Card */}
                                <motion.div
                                    animate={{
                                        opacity: hoveredId === null || hoveredId === exp.id ? 1 : 0.45,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        background: '#FFFFFF',
                                        border: `2px solid`,
                                        borderColor: hoveredId === exp.id ? exp.accent : `${exp.accent}30`,
                                        boxShadow: hoveredId === exp.id ? `4px 4px 0 ${exp.accent}` : `2px 2px 0 ${exp.accent}10`,
                                        transition: 'border-color 0.25s, box-shadow 0.25s',
                                    }}
                                >
                                    {/* Win98 title bar per card */}
                                    <div
                                        className="px-4 py-2 flex items-center justify-between"
                                        style={{
                                            background: `linear-gradient(90deg, ${exp.accent}15 0%, transparent 100%)`,
                                        }}
                                    >
                                        <span className="font-press-start text-[8px] text-zinc-600 opacity-90">
                                            {String(index + 1).padStart(2, '0')}_{exp.company.toUpperCase().slice(0, 20).replace(/ /g, '_')}
                                        </span>
                                        <div className="flex gap-1">
                                            <div style={{ width: 8, height: 8, background: '#FFE600', borderRadius: 0 }} />
                                            <div style={{ width: 8, height: 8, background: '#00FFFF', borderRadius: 0 }} />
                                            <div style={{ width: 8, height: 8, background: '#FF4444', borderRadius: 0 }} />
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 lg:p-8">
                                        {/* Header Row */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                            <div>
                                                <h3
                                                    className="font-vt323 text-3xl uppercase mb-1 transition-all duration-200"
                                                    style={{
                                                        color: '#18181B',
                                                        textShadow: hoveredId === exp.id ? `2px 2px 0px ${exp.accent}20` : 'none',
                                                    }}
                                                >
                                                    {exp.position}
                                                </h3>
                                                <h4 className="font-press-start text-[9px] tracking-wider" style={{ color: exp.accent }}>
                                                    {exp.company}
                                                </h4>
                                            </div>
                                            <div className="mt-3 md:mt-0 md:text-right flex-shrink-0">
                                                <p className="font-space-mono text-xs font-bold" style={{ color: '#0891B2' }}>{exp.duration}</p>
                                                <p className="font-space-mono text-xs mt-1" style={{ color: 'rgba(0,0,0,0.5)' }}>{exp.location}</p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <ul className="space-y-3 mb-6">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="font-space-mono text-xs mt-0.5 flex-shrink-0" style={{ color: exp.accent }}>{`>`}</span>
                                                    <span className="font-space-mono text-xs leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
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
                                                    className="font-space-mono text-[10px] px-2 py-1 uppercase tracking-wider transition-all duration-150"
                                                    style={{
                                                        color: `${exp.accent}bb`,
                                                        border: `1px solid ${exp.accent}30`,
                                                        background: `${exp.accent}08`,
                                                    }}
                                                    onMouseEnter={e => {
                                                        e.currentTarget.style.color = exp.accent;
                                                        e.currentTarget.style.borderColor = exp.accent;
                                                        e.currentTarget.style.boxShadow = `2px 2px 0 ${exp.accent}`;
                                                    }}
                                                    onMouseLeave={e => {
                                                        e.currentTarget.style.color = `${exp.accent}bb`;
                                                        e.currentTarget.style.borderColor = `${exp.accent}30`;
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* EOF line */}
                    <div className="mt-16 text-center font-space-mono text-xs" style={{ color: 'rgba(255,0,255,0.25)' }}>
                        {"// EOF — EXPERIENCE LOG"}
                    </div>
                </div>
            </div>
        </>
    );
}
