import IconCloud from "./ui/icon-cloud";
import { motion } from "framer-motion";
import ScrollProgress from "./ui/ScrollProgress";

// React Icons imports
import { VscVscode } from "react-icons/vsc";
import { FaJava, FaReact, FaGitAlt, FaDocker, FaNode } from "react-icons/fa";
import { IoLogoPython, IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { 
  SiExpress, 
  SiMongodb, 
  SiCplusplus, 
  SiPostman, 
  SiNetlify, 
  SiVite, 
  SiWarp,
  SiSpringboot, 
  SiOracle, 
  SiNumpy, 
  SiJunit5, 
  SiHtml5, 
  SiCss3, 
  SiTypescript 
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";

export default function LandingPage() {

    const slugs = [
      "typescript",
      "javascript",
      "react",
      "npm",
      "java",
      "react",
      "android",
      "html5",
      "css3",
      "nodedotjs",
      "amazonaws",
      "postgresql",
      "netlify",
      "tailwindcss",
      "testinglibrary",
      "git",
      "github",
      "visualstudiocode",
      "figma",
      "python",
      "c",
      "apple",
      "spring",
      "springboot",
      "pandas",
      "scikit-learn",
      "numpy",
      "oracle",
    ];

    const staggerChildren = {
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    };

    const socialIconVariants = {
      initial: { opacity: 0, scale: 0 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        } 
      },
      hover: { scale: 1.2, rotate: 5 }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <ScrollProgress />
        
        {/* Hero Section */}
        <motion.section 
          className="relative pt-20 pb-16 px-4 min-h-screen flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              
              {/* Hero Content */}
              <div className="flex-1 text-center lg:text-left max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                    Yuvam Kumar
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-blue-600 mb-4 lg:mb-6">
                    Software Developer & University of British Columbia CS Major
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                    Computer Science student passionate about building innovative solutions. 
                    I create seamless digital experiences with modern technologies and clean code.
                  </p>
                </motion.div>

                {/* Location & Contact */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 lg:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    <span className="text-base sm:text-lg font-medium">Canada</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-base sm:text-lg font-medium">Available for opportunities</span>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-6 lg:mb-8"
                  variants={staggerChildren}
                  initial="initial"
                  animate="animate"
                >
                  <motion.a 
                    href="https://github.com/YuvamKumarSWE" 
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-700" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/yuvamkumar/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-600" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="mailto:yuvamk.swe@gmail.com" 
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-red-500" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                    </svg>
                  </motion.a>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.a
                    href="mailto:yuvamk.swe@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center shadow-lg"
                  >
                    Get In Touch
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/file/d/1tI1YDb495YwzzHpGVPyI-B0MJi7KfZbs/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 text-center"
                  >
                    View Resume
                  </motion.a>
                </motion.div>
              </div>

              {/* Hero Image/Visual */}
              <div className="flex-shrink-0 hidden lg:block">
                <motion.div 
                  className="w-96 h-96 rounded-full overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="/images/yuvam.jpeg" 
                    alt="Yuvam Kumar" 
                    className="w-full h-full object-cover object-top scale-110 "
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 ">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </motion.div>
          </div>
        </motion.section>

       

        {/* Skills Section */}
        <motion.section 
          className="py-20 px-4 bg-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Technical Expertise
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A comprehensive toolkit of modern technologies and frameworks for building scalable, efficient applications
              </motion.p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>

              {/* Icon Cloud */}
              <motion.div 
                className="flex justify-center mb-16"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-80 h-80 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-xl"></div>
                  <div className="relative">
                    <IconCloud iconSlugs={slugs} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skills Grid */}
            <motion.div 
              className="space-y-12"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {[
                    { skill: "JavaScript", Icon: IoLogoJavascript },
                    { skill: "TypeScript", Icon: SiTypescript },
                    { skill: "Java", Icon: FaJava },
                    { skill: "Python", Icon: IoLogoPython },
                    { skill: "C/C++", Icon: SiCplusplus },
                    { skill: "SQL", Icon: TbSql },
                    { skill: "HTML5", Icon: SiHtml5 },
                    { skill: "CSS3", Icon: SiCss3 }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3
                      }}
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-32 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <item.Icon className="text-3xl mb-2 text-gray-700 group-hover:text-blue-600 transition-colors" />
                        <span className="font-semibold text-sm text-gray-800">{item.skill}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Frameworks & Libraries */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-emerald-600 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Frameworks & Libraries</h3>
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {[
                    { skill: "React.js", Icon: FaReact },
                    { skill: "Node.js", Icon: FaNode },
                    { skill: "Express.js", Icon: SiExpress },
                    { skill: "Spring Boot", Icon: SiSpringboot },
                    { skill: "NumPy", Icon: SiNumpy },
                    { skill: "JUnit", Icon: SiJunit5 },
                    { skill: "Tailwind CSS", Icon: RiTailwindCssFill }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3
                      }}
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-32 p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <item.Icon className="text-3xl mb-2 text-gray-700 group-hover:text-emerald-600 transition-colors" />
                        <span className="font-semibold text-sm text-gray-800">{item.skill}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Databases */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-purple-600 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {[
                    { skill: "MongoDB", Icon: SiMongodb },
                    { skill: "PostgreSQL", Icon: BiLogoPostgresql },
                    { skill: "Firebase", Icon: IoLogoFirebase },
                    { skill: "Oracle", Icon: SiOracle }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3
                      }}
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-32 p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <item.Icon className="text-3xl mb-2 text-gray-700 group-hover:text-purple-600 transition-colors" />
                        <span className="font-semibold text-sm text-gray-800">{item.skill}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Developer Tools */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-orange-600 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Developer Tools</h3>
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {[
                    { skill: "Git/GitHub", Icon: FaGitAlt },
                    { skill: "Docker", Icon: FaDocker },
                    { skill: "Postman", Icon: SiPostman },
                    { skill: "Netlify", Icon: SiNetlify },
                    { skill: "Vite", Icon: SiVite },
                    { skill: "Warp", Icon: SiWarp },
                    { skill: "VS Code", Icon: VscVscode }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3
                      }}
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-32 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        {item.Icon ? (
                          <item.Icon className="text-3xl mb-2 text-gray-700 group-hover:text-orange-600 transition-colors" />
                        ) : (
                          <div className="w-8 h-8 mb-2 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-xs font-bold text-white">{item.skill.charAt(0)}</span>
                          </div>
                        )}
                        <span className="font-semibold text-sm text-gray-800">{item.skill}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About me
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              As a dedicated Computer Science student and full-stack developer, I thrive on turning complex problems 
              into elegant solutions. My journey in software engineering is driven by curiosity, creativity, and a 
              commitment to building technology that makes a meaningful impact.
            </motion.p>
          
          </div>
        </motion.section>
      </div>
    );
}