import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from "./Components/NavBarComponents/NavBar";
import LandingPage from './Components/LandingPage';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import BackgroundParticles from './Components/ui/BackgroundParticles';
import Cursor from './Components/ui/Cursor';
import LoadingScreen from './Components/ui/LoadingScreen';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';

// CRT power-off / power-on page transition
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
      style={{ transformOrigin: 'center' }}
    >
      {children}
    </motion.div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Win98 retro status bar
function StatusBar() {
  const [time, setTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pageMap = { '/': 'HOME.EXE', '/projects': 'PROJECTS.EXE', '/experience': 'EXPERIENCE.EXE' };
  const currentPage = pageMap[location.pathname] || 'PAGE.EXE';

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9995] status-bar flex items-center justify-between px-3"
      aria-hidden="true"
    >
      <div className="flex items-center gap-3">
        <span
          className="font-press-start"
          style={{ color: '#FF00FF', border: '1px solid #FF00FF', padding: '1px 5px', fontSize: 8 }}
        >
          YK
        </span>
        <span className="blink" style={{ color: 'rgba(255,0,255,0.4)', fontSize: 9 }}>▌</span>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9 }}>{currentPage}</span>
      </div>
      <div className="flex items-center gap-4">
        <span style={{ color: 'rgba(0,255,255,0.4)', fontSize: 9 }}>PORTFOLIO OS v2.0</span>
        <span
          style={{
            color: '#FF00FF',
            border: '1px solid rgba(255,0,255,0.35)',
            padding: '1px 6px',
            fontSize: 9,
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {time}
        </span>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => { window.scrollTo(0, 0); setLoading(false); }} />}
      </AnimatePresence>
      <Cursor />
      <BackgroundParticles />
      {/* Scanlines + CRT beam + screen flicker */}
      <div className="fixed inset-0 pointer-events-none z-[9990] scanlines crt-beam screen-flicker" aria-hidden="true" />
      <NavBar />
      <ScrollToTop />
      <div className="content" style={{ paddingBottom: '26px' }}>
        <AnimatedRoutes />
      </div>
      <StatusBar />
    </Router>
  );
}

export default App;
