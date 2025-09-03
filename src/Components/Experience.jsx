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
                "Contributing to the development of scalable APIs and customer-facing applications within an Agile team, leveraging modern technologies such as Spring Boot, JPA, and Angular.",
                "Collaborating with developers, product managers, and business stakeholders to deliver innovative solutions supporting RBC's large-scale digital transformation in commercial banking.",
                "Enhancing technical foundation through hands-on experience with software engineering practices including code reviews, testing, and source code management to ensure high-quality deliverables."
            ],
            technologies: ["Spring Boot", "JPA", "Angular", "APIs", "Agile"]
        },
        {
            id: 2,
            company: "UBC AMLA",
            position: "Software Developer",
            duration: "Jan 2025 – Current",
            location: "Vancouver, BC",
            description: [
                "Collaborated within an Agile team to design and develop a full-stack AI video platform in Python, leading the implementation of a sourcing pipeline using ffmpeg, Whisper, and related libraries to enhance educational engagement and content accuracy.",
                "Deployed ML services with Gradio and Hugging Face Spaces, optimizing model spin-up and leveraging multithreading to accelerate video transcription and processing.",
                "Achieved 95% reduction in video flickering, increased focused content accuracy, minimized subtitle delays, and collaborated with a team of developers following best practices and weekly Agile meetings."
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
                "Led research achieving 99% accuracy in calculus model validation using computational methods, resulting in simulations now adopted as educational visualization tools.",
                "Utilized AutoCAD and simulation software to construct high-accuracy models, bridging theoretical knowledge with practical applications.",
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
