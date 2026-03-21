import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const BOOT_LINES = [
  "STARTING SYSTEM...",
  "LOADING ASSETS...",
  "COMPILING DATA...",
  "READY.",
];

const BLOCK_COUNT = 20;

export default function LoadingScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const lineTimings = [0, 500, 1000, 1600];
    const timers = lineTimings.map((delay, i) =>
      setTimeout(() => setVisibleLines(i + 1), delay)
    );

    const start = performance.now();
    const duration = 2000;
    let rafId;
    const tick = (now) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);

    const exitTimer = setTimeout(() => {
      if (!doneRef.current) {
        doneRef.current = true;
        setExiting(true);
        setTimeout(onComplete, 500);
      }
    }, 2200);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
      cancelAnimationFrame(rafId);
    };
  }, [onComplete]);

  const filledBlocks = Math.round((progress / 100) * BLOCK_COUNT);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "#FAFAFA" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Scanlines on loading screen too */}
          <div className="fixed inset-0 pointer-events-none scanlines" />

          <div className="w-full max-w-sm px-8 font-space-mono">
            {/* Title */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="font-press-start text-2xl mb-1">
                <span style={{ color: '#D946EF' }}>YUVAM</span>
                <span className="text-zinc-900">.EXE</span>
              </div>
              <div className="font-space-mono text-xs tracking-widest mt-2" style={{ color: 'rgba(0,0,0,0.4)' }}>
                // PORTFOLIO OS v2.0
              </div>
            </motion.div>

            {/* Boot lines */}
            <div className="space-y-2 mb-8 text-xs font-space-mono">
              {BOOT_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: visibleLines > i ? 1 : 0, x: visibleLines > i ? 0 : -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <span style={{ color: '#D946EF' }} className="select-none">{">"}</span>
                  <span style={{ color: visibleLines > i ? (i === BOOT_LINES.length - 1 ? '#06B6D4' : 'rgba(0,0,0,0.7)') : 'transparent' }}>
                    {line}
                  </span>
                  {visibleLines === i + 1 && i < BOOT_LINES.length - 1 && (
                    <span style={{ color: '#D946EF' }} className="blink">▌</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Windows 98-style chunky block progress bar */}
            <div
              className="mb-2"
              style={{
                border: '2px solid #D946EF',
                padding: '2px',
                background: '#FAFAFA',
              }}
            >
              <div className="flex gap-[2px]">
                {Array.from({ length: BLOCK_COUNT }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: '12px',
                      background: i < filledBlocks
                        ? (i < BLOCK_COUNT * 0.5 ? '#D946EF' : '#06B6D4')
                        : 'rgba(0,0,0,0.1)',
                      transition: 'background 0.1s',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between font-space-mono text-xs">
              <span style={{ color: 'rgba(0,0,0,0.5)' }}>LOADING</span>
              <span style={{ color: '#D946EF' }}>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
