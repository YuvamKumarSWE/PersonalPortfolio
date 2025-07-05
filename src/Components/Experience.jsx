import { motion } from 'framer-motion';
import ScrollProgress from './ui/ScrollProgress';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            company: "Tech Innovations Inc.",
            position: "Software Engineering Intern",
            duration: "May 2024 - August 2024",
            location: "Vancouver, BC",
            description: [
                "Developed and maintained web applications using React.js and Node.js",
                "Collaborated with cross-functional teams to deliver high-quality software solutions",
                "Implemented responsive UI components following modern design principles",
                "Participated in code reviews and agile development processes"
            ],
            technologies: ["React", "Node.js", "JavaScript", "Git", "Agile"]
        },
        {
            id: 2,
            company: "Digital Solutions Corp",
            position: "Frontend Developer",
            duration: "September 2023 - April 2024",
            location: "Remote",
            description: [
                "Built dynamic user interfaces using React and modern CSS frameworks",
                "Optimized application performance and improved user experience",
                "Integrated RESTful APIs and managed state using Redux",
                "Worked closely with designers to implement pixel-perfect designs"
            ],
            technologies: ["React", "Redux", "CSS3", "REST APIs", "Figma"]
        },
        {
            id: 3,
            company: "StartupLab Solutions",
            position: "Full Stack Developer",
            duration: "June 2023 - August 2023",
            location: "Vancouver, BC",
            description: [
                "Developed full-stack applications using MERN stack",
                "Designed and implemented database schemas using MongoDB",
                "Created secure authentication systems and API endpoints",
                "Deployed applications to cloud platforms and managed CI/CD pipelines"
            ],
            technologies: ["MongoDB", "Express", "React", "Node.js", "AWS"]
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
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            Professional Experience
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            My journey as a software engineer, building innovative solutions and growing through diverse experiences
                        </p>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
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

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Collaborate?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            I&apos;m always open to discussing new opportunities and exciting projects
                        </p>
                        <motion.a
                            href="mailto:yuvamk.swe@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            Get In Touch
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
