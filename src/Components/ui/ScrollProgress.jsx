import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top progress bar — magenta → cyan */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #D946EF, #06B6D4)",
          boxShadow: "0 0 8px rgba(217, 70, 239, 0.4)",
        }}
      />

      {/* Scroll-to-top button — pixel border style */}
      <motion.button
        className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center z-50 font-space-mono text-xs"
        style={{
          background: '#FAFAFA',
          border: '2px solid #D946EF',
          boxShadow: '3px 3px 0px #D946EF',
          color: '#D946EF',
          borderRadius: 0,
        }}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        whileHover={{
          boxShadow: "5px 5px 0px #D946EF",
          x: -2,
          y: -2,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D946EF"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </motion.button>
    </>
  );
};

export default ScrollProgress;
