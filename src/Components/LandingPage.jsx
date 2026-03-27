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

const MARQUEE_ITEMS = [
  "> SOFTWARE DEVELOPER",
  "> FULL-STACK ENGINEER",
  "> CS @ UBC",
  "> REACT",
  "> JAVA",
  "> PYTHON",
  "> AWS",
  "> SPRING BOOT",
  "> MONGODB",
  "> DOCKER",
  "> CI/CD",
  "> REST APIS",
];

export default function LandingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Mouse parallax
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

  // Typing effect
  const roles = ["SOFTWARE DEVELOPER", "FULL-STACK ENGINEER", "CS @ UBC"];
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

  // Letter animation
  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i) => ({
      opacity: 1, y: 0, rotateX: 0,
      transition: { delay: 0.5 + i * 0.05, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };
  const nameLetters = "YUVAM KUMAR".split("");

  // Skill categories — Y2K accent colors
  const skillCategories = [
    {
      title: "Languages",
      accent: "#FF00FF",
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
      accent: "#00FFFF",
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
      accent: "#FFE600",
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
      accent: "#FF6600",
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

  // Contact cards with Y2K colors and window chrome
  const contactCards = [
    {
      label: "EMAIL.EXE",
      value: "yuvamk.swe@gmail.com",
      desc: "Best way to reach me",
      href: "mailto:yuvamk.swe@gmail.com",
      accent: "#FF00FF",
      borderClass: "pixel-border",
    },
    {
      label: "GITHUB.EXE",
      value: "@YuvamKumarSWE",
      desc: "Browse my code",
      href: "https://github.com/YuvamKumarSWE",
      accent: "#00FFFF",
      borderClass: "pixel-border-cyan",
    },
    {
      label: "LINKEDIN.EXE",
      value: "/in/yuvamkumar",
      desc: "Connect with me",
      href: "https://www.linkedin.com/in/yuvamkumar/",
      accent: "#FFE600",
      borderClass: "pixel-border-yellow",
    },
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgress />

      {/* ========================================= */}
      {/*                HERO SECTION               */}
      {/* ========================================= */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        {/* Y2K grid overlay — magenta tinted */}
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,0,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Mouse-following ambient glow — magenta */}
        <motion.div
          className="absolute w-[600px] h-[600px] pointer-events-none z-0"
          style={{
            x: springX, y: springY,
            background: "radial-gradient(circle, rgba(255, 0, 255, 0.07) 0%, transparent 70%)",
            top: "20%", left: "30%",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] pointer-events-none z-0"
          style={{
            x: useTransform(springX, v => -v * 1.5),
            y: useTransform(springY, v => -v * 1.5),
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.04) 0%, transparent 70%)",
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
            <span className="font-press-start text-[10px] tracking-widest uppercase phosphor-magenta" style={{ color: '#FF00FF' }}>
              &lt;hello_world /&gt;
            </span>
          </motion.div>

          {/* Giant Name — VT323 pixel font with glitch */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-vt323 leading-[0.9] tracking-tight text-zinc-900 whitespace-nowrap"
              style={{
                fontSize: 'clamp(4rem, 14vw, 13rem)',
                perspective: 1000,
              }}
            >
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className={`inline-block ${letter === " " ? "mr-[2vw]" : ""} glitch`}
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

          {/* Typing role — Space Mono, uppercase */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="font-space-mono text-base sm:text-lg lg:text-xl tracking-widest" style={{ color: 'rgba(0,0,0,0.5)' }}>
              <span className="gradient-text-y2k font-bold">{displayed}</span>
              <span className="blink" style={{ color: '#D946EF' }}>_</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="font-space-mono text-xs sm:text-sm max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'rgba(0,0,0,0.6)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {"// building innovative digital experiences"}<br />
            {"// with modern technologies and clean architecture"}
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
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="holo-border font-press-start text-[9px] uppercase tracking-wider px-6 py-3 font-bold"
              style={{ color: '#FF00FF', background: 'transparent' }}
            >
              GET IN TOUCH
            </motion.a>
            <motion.a
              href="https://docs.google.com/document/d/1W0OPxAc82DQ6vQ6djhJdS4bhFtV7JbN7/edit?usp=sharing&ouid=116903424471273577317&rtpof=true&sd=true"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="font-press-start text-[9px] uppercase tracking-wider px-6 py-3"
              style={{ color: '#0891B2', background: 'transparent', border: '2px solid #0891B2', boxShadow: '4px 4px 0px #0891B2' }}
            >
              VIEW RESUME
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
                  className="w-9 h-9 flex items-center justify-center transition-all duration-150"
                  style={{ border: '1px solid rgba(255,0,255,0.3)', color: 'rgba(255,0,255,0.5)' }}
                  whileHover={{ scale: 1.1, x: -1, y: -1, borderColor: '#FF00FF', color: '#FF00FF', boxShadow: '2px 2px 0 #FF00FF' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">{s.svg}</svg>
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
              <span className="font-press-start text-[8px] uppercase tracking-widest" style={{ color: 'rgba(255,0,255,0.4)' }}>scroll</span>
              <div className="w-px h-8 mx-auto mt-2" style={{ background: 'linear-gradient(to bottom, rgba(255,0,255,0.5), transparent)' }} />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating tech decoratives */}
        <div className="absolute top-[14%] right-[7%] font-space-mono text-xs hidden lg:block animate-pixel-float" style={{ color: '#00FFFF', opacity: 0.18, animationDelay: '0s', animationDuration: '4s' }}>0xFF2A3C</div>
        <div className="absolute top-[38%] left-[4%] font-space-mono text-xs hidden lg:block animate-pixel-float" style={{ color: '#FF00FF', opacity: 0.15, animationDelay: '1.5s', animationDuration: '5s' }}>0x0D001A</div>
        <div className="absolute top-[65%] right-[5%] font-space-mono text-xs hidden lg:block animate-pixel-float" style={{ color: '#FFE600', opacity: 0.12, animationDelay: '0.8s', animationDuration: '4.5s' }}>0xFFE600</div>
        <div className="absolute top-[22%] left-[7%] font-space-mono text-[9px] hidden lg:block animate-pixel-float leading-tight" style={{ color: '#FF1493', opacity: 0.12, animationDelay: '2s', animationDuration: '6s' }}>
          {'┌────┐'}<br/>{'│ YK │'}<br/>{'└────┘'}
        </div>
        <div className="absolute bottom-[25%] left-[6%] font-space-mono text-[9px] hidden lg:block tracking-widest" style={{ color: '#FF00FF', opacity: 0.08 }}>
          01011001 01110101 01110110 01100001 01101101
        </div>
        <div className="absolute bottom-[35%] right-[9%] font-space-mono text-[9px] hidden lg:block animate-pixel-float" style={{ color: '#00FF41', opacity: 0.12, animationDelay: '3s', animationDuration: '5.5s' }}>
          {'> INIT_COMPLETE'}<br/>{'> STATUS: ONLINE'}
        </div>

        {/* Y2K corner accents */}
        <div className="absolute top-24 left-8 w-16 h-16 hidden lg:block" style={{ borderLeft: '2px solid rgba(255,0,255,0.3)', borderTop: '2px solid rgba(255,0,255,0.3)' }} />
        <div className="absolute bottom-8 right-8 w-16 h-16 hidden lg:block" style={{ borderRight: '2px solid rgba(0,255,255,0.3)', borderBottom: '2px solid rgba(0,255,255,0.3)' }} />
      </motion.section>

      {/* ========================================= */}
      {/*              MARQUEE STRIP                */}
      {/* ========================================= */}
      <div className="w-full overflow-hidden border-y" style={{ borderColor: 'rgba(255,0,255,0.2)', background: 'rgba(255,0,255,0.03)', padding: '12px 0' }}>
        <div className="marquee-track font-press-start text-[9px] tracking-widest" style={{ color: 'rgba(255,0,255,0.6)' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="mx-8 whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>
      <div className="w-full overflow-hidden" style={{ padding: '10px 0', background: 'rgba(0,255,255,0.02)' }}>
        <div className="marquee-track-reverse font-space-mono text-[10px] tracking-widest" style={{ color: 'rgba(0,255,255,0.35)' }}>
          {[...MARQUEE_ITEMS.slice().reverse(), ...MARQUEE_ITEMS.slice().reverse()].map((item, i) => (
            <span key={i} className="mx-8 whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>

      {/* ========================================= */}
      {/*              SKILLS SECTION               */}
      {/* ========================================= */}
      <motion.section
        className="py-28 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ background: 'radial-gradient(ellipse at top left, rgba(255,0,255,0.06) 0%, transparent 60%)' }}
      >
        {/* ASCII Divider */}
        <div className="ascii-divider text-sm mb-12">✦·.·´¯`·.·✦ SKILLS ✦·.·´¯`·.·✦</div>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-press-start text-[9px] tracking-widest uppercase mb-4 phosphor-magenta" style={{ color: '#D946EF' }}>
              _tech_stack
            </p>
            <h2 className="font-vt323 text-5xl lg:text-7xl text-zinc-900">
              TECHNICAL<br />
              <span className="text-outline-dark">EXPERTISE</span>
            </h2>
          </motion.div>

          {/* Skill Categories */}
          <div className="space-y-6">
            {skillCategories.map((cat, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-6 lg:p-8 dither-pattern"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: `2px solid ${cat.accent}40`,
                  boxShadow: `4px 4px 0px ${cat.accent}30`,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-2 h-2 blink"
                    style={{ backgroundColor: cat.accent }}
                  />
                  <h3 className="font-press-start text-[9px] uppercase tracking-widest" style={{ color: cat.accent }}>{cat.title}</h3>
                  <div className="flex-1 h-px" style={{ background: `${cat.accent}30` }} />
                </div>

                {/* Skill Items */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: -1, y: -1 }}
                      className="flex items-center gap-2 px-3 py-2 font-space-mono text-[11px] transition-all duration-150"
                      style={{
                        background: 'rgba(240,240,240,0.8)',
                        border: `1px solid ${cat.accent}30`,
                        color: 'rgba(0,0,0,0.6)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = cat.accent;
                        e.currentTarget.style.color = cat.accent;
                        e.currentTarget.style.boxShadow = `2px 2px 0 ${cat.accent}`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = `${cat.accent}30`;
                        e.currentTarget.style.color = 'rgba(0,0,0,0.6)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <item.Icon className="text-sm" />
                      <span className="whitespace-nowrap">{item.skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ========================================= */}
      {/*              CONTACT SECTION              */}
      {/* ========================================= */}
      <motion.section
        className="py-28 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(0,255,255,0.05) 0%, transparent 60%)' }}
      >
        {/* ASCII Divider */}
        <div className="ascii-divider text-sm mb-12 phosphor-cyan" style={{ color: '#00FFFF' }}>✦·.·´¯`·.·✦ CONTACT ✦·.·´¯`·.·✦</div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-press-start text-[9px] tracking-widest uppercase mb-4 phosphor-magenta" style={{ color: '#D946EF' }}>_contact</p>
            <h2 className="font-vt323 text-5xl lg:text-7xl text-zinc-900">
              GET IN <span className="text-outline-dark">TOUCH</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((contact, i) => (
              <motion.a
                key={i}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`block ${contact.borderClass} transition-all duration-150`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Windows 98 title bar */}
                <div className="win98-titlebar">
                  <span className="font-press-start text-[8px] text-white">{contact.label}</span>
                  <div className="flex gap-1">
                    <div className="win98-dot" style={{ width: 8, height: 8, background: '#FFE600' }} />
                    <div className="win98-dot" style={{ width: 8, height: 8, background: '#00FFFF' }} />
                    <div className="win98-dot" style={{ width: 8, height: 8, background: '#FF4444' }} />
                  </div>
                </div>
                {/* Card content */}
                <div className="p-6" style={{ background: '#FFFFFF' }}>
                  <div
                    className="w-2 h-2 mb-4 blink"
                    style={{ backgroundColor: contact.accent }}
                  />
                  <p className="font-space-mono text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(0,0,0,0.5)' }}>{contact.label.replace('.EXE', '')}</p>
                  <p className="font-space-mono font-bold text-sm mb-1 text-zinc-900">{contact.value}</p>
                  <p className="font-space-mono text-xs" style={{ color: 'rgba(0,0,0,0.6)' }}>{contact.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
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
        {/* ASCII Divider */}
        <div className="ascii-divider text-sm mb-16">✦·.·´¯`·.·✦ ✦·.·´¯`·.·✦</div>

        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-vt323 text-4xl sm:text-5xl lg:text-6xl text-zinc-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            LET&apos;S BUILD SOMETHING <span className="gradient-text-y2k">AMAZING</span>.
          </motion.h2>
          <motion.p
            className="font-space-mono text-xs mb-10"
            style={{ color: 'rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {"// always open to exciting projects and collaborations"}
          </motion.p>
          <motion.a
            href="mailto:yuvamk.swe@gmail.com"
            className="inline-block pixel-border font-press-start text-[9px] uppercase tracking-wider px-8 py-4 glow-magenta"
            style={{ color: '#FF00FF', background: 'transparent' }}
            whileHover={{ x: -2, y: -2 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            SAY HELLO →
          </motion.a>

          <div className="mt-16 font-space-mono text-xs" style={{ color: 'rgba(255,0,255,0.25)' }}>
            {"// EOF — YUVAM KUMAR PORTFOLIO v2.0"}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
