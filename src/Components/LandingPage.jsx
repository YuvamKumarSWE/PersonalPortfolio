import IconCloud from "./ui/icon-cloud";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import ScrollProgress from "./ui/ScrollProgress";
import { useRef, useEffect, useState } from "react";

// React Icons imports
import { VscVscode } from "react-icons/vsc";
import { FaJava, FaReact, FaGitAlt, FaDocker, FaNode, FaAws, FaLinux, FaBootstrap, FaGithub } from "react-icons/fa";
import { IoLogoPython, IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress, SiMongodb, SiCplusplus, SiPostman,
  SiSpringboot, SiOracle, SiHtml5, SiCss3,
  SiTypescript, SiAngular, SiFastapi, SiSpring,
  SiSpringsecurity, SiLangchain, SiMysql, SiSupabase,
  SiApachemaven, SiJira, SiHuggingface, SiNumpy,
  SiPandas, SiScikitlearn, SiSelenium, SiJunit5,
  SiGithubactions
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";

export default function LandingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Mouse parallax for hero ambient glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 50);
      mouseY.set((e.clientY - window.innerHeight / 2) / 50);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  // Typing effect for role
  const roles = ["Software Developer", "Full-Stack Engineer", "CS @ UBC"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Letter-by-letter animation
  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i) => ({
      opacity: 1, y: 0, rotateX: 0,
      transition: { delay: 0.5 + i * 0.05, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };
  const nameLetters = "YUVAM KUMAR".split("");

  // Skill categories
  const skillCategories = [
    {
      title: "Languages",
      accent: "#00F050",
      items: [
        { skill: "JavaScript", Icon: IoLogoJavascript },
        { skill: "TypeScript", Icon: SiTypescript },
        { skill: "Java", Icon: FaJava },
        { skill: "Python", Icon: IoLogoPython },
        { skill: "C/C++", Icon: SiCplusplus },
        { skill: "SQL", Icon: TbSql },
        { skill: "HTML5", Icon: SiHtml5 },
        { skill: "CSS3", Icon: SiCss3 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      accent: "#00C8FF",
      items: [
        { skill: "Spring Boot", Icon: SiSpringboot },
        { skill: "Node.js", Icon: FaNode },
        { skill: "Express.js", Icon: SiExpress },
        { skill: "React", Icon: FaReact },
        { skill: "Angular", Icon: SiAngular },
        { skill: "FastAPI", Icon: SiFastapi },
        { skill: "Spring MVC", Icon: SiSpring },
        { skill: "Spring Security", Icon: SiSpringsecurity },
        { skill: "Spring Data JPA", Icon: SiSpring },
        { skill: "LangChain", Icon: SiLangchain },
        { skill: "LangGraph", Icon: SiLangchain },
        { skill: "Hugging Face", Icon: SiHuggingface },
        { skill: "NumPy", Icon: SiNumpy },
        { skill: "Pandas", Icon: SiPandas },
        { skill: "Scikit-Learn", Icon: SiScikitlearn },
        { skill: "Selenium", Icon: SiSelenium },
        { skill: "JUnit", Icon: SiJunit5 },
        { skill: "Bootstrap", Icon: FaBootstrap },
        { skill: "Tailwind", Icon: RiTailwindCssFill },
      ],
    },
    {
      title: "Databases",
      accent: "#A855F7",
      items: [
        { skill: "MongoDB", Icon: SiMongodb },
        { skill: "PostgreSQL", Icon: BiLogoPostgresql },
        { skill: "Oracle", Icon: SiOracle },
        { skill: "MySQL", Icon: SiMysql },
        { skill: "Firebase (GCP)", Icon: IoLogoFirebase },
        { skill: "Supabase", Icon: SiSupabase },
      ],
    },
    {
      title: "Developer Tools & Others",
      accent: "#F97316",
      items: [
        { skill: "Git", Icon: FaGitAlt },
        { skill: "GitHub", Icon: FaGithub },
        { skill: "Actions (CI/CD)", Icon: SiGithubactions },
        { skill: "Linux", Icon: FaLinux },
        { skill: "AWS", Icon: FaAws },
        { skill: "Docker", Icon: FaDocker },
        { skill: "Maven", Icon: SiApachemaven },
        { skill: "Postman", Icon: SiPostman },
        { skill: "VS Code", Icon: VscVscode },
        { skill: "Jira (Agile)", Icon: SiJira },
      ],
    },
  ];

  const slugs = [
    "typescript", "javascript", "react", "angular", "java",
    "html5", "css3", "nodedotjs", "express", "fastapi",
    "amazonaws", "postgresql", "mysql", "mongodb", "supabase",
    "git", "github", "docker", "python", "spring",
    "springboot", "langchain", "apachemaven", "jira",
    "numpy", "pandas", "scikitlearn", "selenium", "junit5",
    "bootstrap", "tailwindcss", "linux", "githubactions",
  ];

  return (
    <div className="min-h-screen noise-overlay">
      <ScrollProgress />

      {/* ========================================= */}
      {/*                HERO SECTION               */}
      {/* ========================================= */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
        </div>

        {/* Mouse-following ambient glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0"
          style={{
            x: springX, y: springY,
            background: "radial-gradient(circle, rgba(0, 240, 80, 0.07) 0%, transparent 70%)",
            top: "20%", left: "30%",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0"
          style={{
            x: useTransform(springX, v => -v * 1.5),
            y: useTransform(springY, v => -v * 1.5),
            background: "radial-gradient(circle, rgba(0, 200, 255, 0.04) 0%, transparent 70%)",
            bottom: "10%", right: "20%",
          }}
        />

        {/* Main Hero Content */}
        <div className="relative z-10 text-center w-full px-6 max-w-7xl">
          {/* Tag line */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-neon-green font-mono text-xs sm:text-sm tracking-[0.4em] uppercase">
              &lt;hello world /&gt;
            </span>
          </motion.div>

          {/* Giant Name — letter-by-letter 3D flip */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-grotesk font-bold text-[12vw] sm:text-[10vw] lg:text-[9vw] leading-[0.85] tracking-tight text-white"
              style={{ perspective: 1000 }}
            >
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className={`inline-block ${letter === " " ? "mr-[3vw]" : ""} glitch`}
                  data-text={letter}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Typing role */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-500 font-light">
              <span className="gradient-text font-grotesk font-medium">{displayed}</span>
              <span className="text-neon-green animate-pulse">|</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            I build innovative digital experiences with modern technologies and clean architecture.
            Passionate about turning complex problems into elegant solutions.
          </motion.p>

          {/* CTA + Social Row */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <motion.a
              href="mailto:yuvamk.swe@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-neon-green text-dark-bg font-bold rounded-lg uppercase tracking-wider text-sm glow-pulse"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1TTAAmm-GkSXFrVPD64hHAJRL4WwiOIHE/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, borderColor: "#00F050" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 border border-gray-700 text-white font-bold rounded-lg hover:text-neon-green transition-all duration-300 uppercase tracking-wider text-sm"
            >
              View Resume
            </motion.a>

            <div className="flex items-center gap-3">
              {[
                { href: "https://github.com/YuvamKumarSWE", label: "GH", svg: <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" /> },
                { href: "https://www.linkedin.com/in/yuvamkumar/", label: "LI", svg: <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" /> },
                { href: "mailto:yuvamk.swe@gmail.com", label: "EM", svg: <><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414z" /><path d="M0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" /></> },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-full hover:border-neon-green hover:bg-neon-green/5 transition-all duration-300 group"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="text-gray-500 group-hover:text-neon-green transition-colors" viewBox="0 0 16 16">{s.svg}</svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <span className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-mono">scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-neon-green/50 to-transparent mx-auto mt-2" />
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-24 left-8 w-20 h-20 border-l border-t border-gray-800/50 hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-gray-800/50 hidden lg:block" />
      </motion.section>

      {/* ========================================= */}
      {/*          SKILLS SECTION (STATIC GRID)     */}
      {/* ========================================= */}
      <motion.section
        className="py-28 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Section divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-neon-green/30 to-transparent" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-neon-green font-mono text-xs tracking-[0.4em] uppercase mb-4">
                _tech_stack
              </p>
              <h2 className="font-grotesk font-bold text-4xl lg:text-6xl text-white">
                Technical<br />
                <span className="text-outline">Expertise</span>
              </h2>
            </div>
            {/* Icon Cloud — positioned at header level on large screens */}
            <motion.div
              className="w-48 h-48 flex-shrink-0 hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-neon-green/5 rounded-full blur-3xl" />
                <IconCloud iconSlugs={slugs} />
              </div>
            </motion.div>
          </motion.div>

          {/* Skill Categories — Full Width Rows */}
          <div className="space-y-6">
            {skillCategories.map((cat, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-surface/50 border border-gray-800/60 rounded-2xl p-6 lg:p-8 backdrop-blur-sm hover:border-gray-700/80 transition-all duration-500 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: cat.accent, boxShadow: `0 0 12px ${cat.accent}40` }}
                  />
                  <h3 className="text-sm font-bold text-gray-300 uppercase tracking-[0.15em]">{cat.title}</h3>
                  <div className="flex-1 h-px bg-gray-800/80" />
                </div>

                {/* Skill Items */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.06,
                        y: -3,
                        boxShadow: `0 4px 20px ${cat.accent}15`,
                      }}
                      className="flex items-center gap-2.5 px-4 py-2.5 bg-gray-900/60 rounded-xl border border-gray-800/60 hover:border-gray-600 transition-all duration-300 group/item"
                    >
                      <item.Icon
                        className="text-base text-gray-500 group-hover/item:text-white transition-colors duration-300"
                      />
                      <span className="font-medium text-xs text-gray-400 group-hover/item:text-white transition-colors duration-300 whitespace-nowrap">
                        {item.skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Icon Cloud */}
          <motion.div
            className="flex justify-center mt-16 lg:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="relative w-56 h-56 flex items-center justify-center">
              <div className="absolute inset-0 bg-neon-green/5 rounded-full blur-3xl" />
              <IconCloud iconSlugs={slugs} />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================================= */}
      {/*              ABOUT SECTION                */}
      {/* ========================================= */}
      <motion.section
        className="py-28 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-neon-green/30 to-transparent" />

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-neon-green font-mono text-xs tracking-[0.4em] uppercase mb-4">_about</p>
            <h2 className="font-grotesk font-bold text-4xl lg:text-6xl text-white mb-8">
              About <span className="text-outline">Me</span>
            </h2>
          </motion.div>

          <motion.div
            className="bg-dark-surface/50 border border-gray-800/50 rounded-2xl p-8 lg:p-12 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "rgba(0, 240, 80, 0.15)" }}
          >
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
              As a dedicated Computer Science student and full-stack developer at{" "}
              <span className="text-white font-medium">UBC</span>,
              I thrive on turning complex problems into elegant solutions. My
              journey in software engineering is driven by curiosity, creativity,
              and a commitment to building technology that makes a{" "}
              <span className="text-neon-green font-medium">meaningful impact</span>.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================================= */}
      {/*               FOOTER CTA                  */}
      {/* ========================================= */}
      <motion.section
        className="py-20 px-6 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let&apos;s build something <span className="gradient-text">amazing</span>.
          </motion.h2>
          <motion.p
            className="text-gray-500 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Always open to exciting projects and collaborations.
          </motion.p>
          <motion.a
            href="mailto:yuvamk.swe@gmail.com"
            className="inline-block px-10 py-4 bg-neon-green text-dark-bg font-bold rounded-lg uppercase tracking-wider text-sm glow-pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Say Hello →
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}