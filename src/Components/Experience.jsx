import { motion } from 'framer-motion';
import ScrollProgress from './ui/ScrollProgress';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            company: "Royal Bank of Canada",
            position: "Software Development Intern",
            duration: "Sept 2025 – Present",
            location: "Toronto, ON",
            description: [
                "Developing Spring Boot microservices for high-availability commercial banking systems, integrating with Angular frontends, MySQL, and AWS components, ensuring reliability through comprehensive testing.",
                "Enhanced Spring Boot backend and Dockerized MySQL database to implement 20 wire payment fields, uncovering and resolving a critical pre-production bug to maintain seamless payment processing.",
                "Refactored legacy presentation logic to streamline payment activity rendering, optimizing 40% of code through clean architecture principles, reducing technical debt and enhancing maintainability.",
                "Implemented 15+ Google Analytics events across 3 high-traffic user journeys, providing product teams with actionable insights to drive adoption."
            ],
            technologies: ["Spring Boot", "JPA", "Angular", "SQL", "MySQL", "AWS", "Docker", "Maven", "Postman", "APIs", "Jira", "Jest", "JUnit"]
        },
        {
            id: 2,
            company: "UBC AMLA",
            position: "Software Developer",
            duration: "Jan 2025 – Aug 2025",
            location: "Vancouver, BC",
            description: [
                "Designed and deployed a full-stack Python AI video platform, reducing flickering by 99% and improving subtitle accuracy to 95%, enhancing learning engagement.",
                "Optimized NVIDIA ASR-powered transcription pipelines with multi-threading, optimizing model spin-up and leveraging GPU acceleration to accelerate transcription, cutting processing time by 40%.",
                "Contributed to setting up multiple microservices and deployed ML services on Hugging Face Spaces with Gradio, enabling efficient real-time access for users."
            ],
            technologies: ["Python", "ffmpeg", "Whisper", "Gradio", "Hugging Face Spaces", "Multithreading", "Agile"]
        },
        {
            id: 3,
            company: "Collin College",
            position: "Undergraduate Research Assistant",
            duration: "September 2023 – May 2024",
            location: "Frisco, TX",
            description: [
                "Achieved 99% accuracy in calculus simulation model validation using computational methods, with resulting visual tools adopted by 200+ students.",
                "Produced high-accuracy models using AutoCAD and simulation software, and presented research findings at academic symposiums to advance adoption of technological teaching aids.",
                "Showcased research outcomes at a regional conference, delivering presentations to university faculty and academic audiences."
            ],
            technologies: ["Research", "Computational Methods", "AutoCAD", "Data Visualization", "Public Speaking"]
        }
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
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <ScrollProgress />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
                <div className="max-w-4xl mx-auto pt-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl lg:text-6xl pt-5 font-bold text-gray-900 mb-6">
                            Professional Experience
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            My journey as a software engineer, building innovative solutions and growing through diverse experiences
                        </p>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
                    </motion.div>

                    {/* Experience Timeline */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative"
                    >
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

                        {experiences.map((exp) => (
                            <motion.div
                                key={exp.id}
                                variants={itemVariants}
                                className="relative mb-12 md:ml-16"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-20 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                                {/* Experience Card */}
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                    }}
                                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
                                >
                                    {/* Company & Position */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                                {exp.position}
                                            </h3>
                                            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                                {exp.company}
                                            </h4>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-600 font-medium">{exp.duration}</p>
                                            <p className="text-gray-500">{exp.location}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <ul className="space-y-2 mb-6">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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
