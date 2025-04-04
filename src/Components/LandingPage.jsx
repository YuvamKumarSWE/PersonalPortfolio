import IconCloud from "./ui/icon-cloud";
import Skill from "./Skill";
import { FaJava } from "react-icons/fa6";
import { IoLogoPython, IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaReact, FaBootstrap, FaGitAlt, FaLinux } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiOracle, SiNumpy, SiPandas, SiTensorflow, SiPostman, SiNetlify, SiCplusplus } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { FaRProject } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import ScrollProgress from "./ui/ScrollProgress";

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

    const fadeInUp = {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.8 }}
    };

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
      <>
        <ScrollProgress />
        
        <motion.div 
          className="flex flex-row items-center justify-center mt-[2%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-20">
              {/* Profile Image */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/yuvam.jpg"
                  alt="Profile Photo"
                  className="rounded-lg w-64 h-64 object-cover md:w-80 md:h-80 shadow-lg"
                />
              </motion.div>
  
              {/* Text Content */}
              <div className="flex flex-col text-center md:text-left mt-[5%]">
                {/* Name and Title */}
                <div>
                  <motion.h1 
                    className="text-5xl font-extrabold font-orbitron md:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Yuvam Kumar
                  </motion.h1>
                  <motion.p 
                    className="text-2xl font-extrabold font-noto text-gray-800 mt-4 md:mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Full-stack developer and 3rd-year computer science student
                  </motion.p>
                </div>
  
                {/* Location */}
                <motion.div 
                  className="flex items-center justify-center md:justify-start mt-6 space-x-3 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <p className="text-xl font-noto text-gray-800 font-extrabold">Vancouver, BC, Canada</p>
                </motion.div>
  
                {/* Social Links */}
                <motion.div 
                  className="flex justify-center md:justify-start space-x-6 mt-6"
                  variants={staggerChildren}
                  initial="initial"
                  animate="animate"
                >
                  <motion.a 
                    href="https://github.com/YuvamKumarSWE" 
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/yuvamkumar/" 
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="28" fill="" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="mailto:yuvamk.swe@gmail.com" 
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center justify-center md:flex-row mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        > 
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
                <motion.h2 
                  className="block text-2xl ml-4 font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                > 
                  Skills 
                </motion.h2>
                <motion.div 
                  className="flex flex-wrap gap-4 mt-4 p-4 max-w-[750px] justify-start"
                  variants={staggerChildren}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    { skill: "Java", Icon: FaJava },
                    { skill: "JavaScript", Icon: IoLogoJavascript },
                    { skill: "Python", Icon: IoLogoPython },
                    { skill: "C/C++", Icon: SiCplusplus },
                    { skill: "HTML/CSS", Icon: FaHtml5 },
                    { skill: "SQL", Icon: TbSql },
                    { skill: "Node.js", Icon: FaNode },
                    { skill: "React.js", Icon: FaReact },
                    { skill: "Express.js", Icon: SiExpress },
                    { skill: "Tailwind CSS", Icon: RiTailwindCssFill },
                    { skill: "Bootstrap", Icon: FaBootstrap },
                    { skill: "Numpy", Icon: SiNumpy },
                    { skill: "Tensorflow", Icon: SiTensorflow },
                    { skill: "PostgreSQL", Icon: BiLogoPostgresql },
                    { skill: "MongoDB", Icon: SiMongodb },
                    { skill: "Firebase", Icon: IoLogoFirebase },
                    { skill: "Oracle", Icon: SiOracle },
                    { skill: "Git/Github", Icon: FaGitAlt },
                    { skill: "Linux", Icon: FaLinux },
                    { skill: "Postman", Icon: SiPostman },
                    { skill: "VS Code", Icon: VscVscode },
                    { skill: "Netlify", Icon: SiNetlify }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.03 }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#f0f4ff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)" 
                      }}
                    >
                      <Skill skill={item.skill} Icon={item.Icon} />
                    </motion.div>
                  ))}
                </motion.div>
            </motion.div>

            <motion.div 
              className="relative flex size-full max-w-[350px] items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <IconCloud iconSlugs={slugs} />
            </motion.div> 
        </motion.div>
      </> 
    );
}