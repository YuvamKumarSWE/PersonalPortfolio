import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const BOOT_LINES = [
  'Loading HIMEM.SYS...',
  'Loading EMM386.EXE...',
  'Starting Windows 98...',
  'Welcome.',
];

const BLOCK_COUNT = 20;

export default function LoadingScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress]         = useState(0);
  const [exiting, setExiting]           = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const lineTimings = [0, 400, 900, 1500];
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
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#000000',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div style={{ width: '100%', maxWidth: 380, padding: '0 32px', fontFamily: 'Tahoma, Verdana, Arial, sans-serif' }}>

            {/* Title */}
            <motion.div
              style={{ marginBottom: 32 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Windows flag-like icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, width: 28, height: 28 }}>
                  <div style={{ background: '#FF0000' }} />
                  <div style={{ background: '#00AA00' }} />
                  <div style={{ background: '#0000FF' }} />
                  <div style={{ background: '#FFAA00' }} />
                </div>
                <div>
                  <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }}>
                    Microsoft Windows 98
                  </div>
                  <div style={{ color: '#AAAAAA', fontSize: 11, marginTop: 2 }}>
                    Second Edition
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #444444', marginTop: 8, paddingTop: 6 }}>
                <div style={{ color: '#888888', fontSize: 10, fontFamily: 'Courier New, monospace' }}>
                  Starting Windows...
                </div>
              </div>
            </motion.div>

            {/* Boot lines */}
            <div style={{ marginBottom: 24 }}>
              {BOOT_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: visibleLines > i ? 1 : 0, x: visibleLines > i ? 0 : -8 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: 12, marginBottom: 4,
                    fontFamily: 'Courier New, monospace',
                  }}
                >
                  <span style={{ color: '#888888' }}>{visibleLines > i ? '>' : ' '}</span>
                  <span style={{
                    color: visibleLines > i
                      ? (i === BOOT_LINES.length - 1 ? '#FFFFFF' : '#CCCCCC')
                      : 'transparent',
                  }}>
                    {line}
                  </span>
                  {visibleLines === i + 1 && i < BOOT_LINES.length - 1 && (
                    <span style={{ color: '#AAAAAA', animation: 'blink 1s step-end infinite' }}>▌</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Windows 98 chunky block progress bar */}
            <div style={{
              border: '2px solid #444444',
              padding: 2,
              background: '#111111',
              marginBottom: 8,
            }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {Array.from({ length: BLOCK_COUNT }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: 14,
                      background: i < filledBlocks ? '#000080' : '#222222',
                      transition: 'background 0.08s',
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: 'Courier New, monospace', fontSize: 10,
            }}>
              <span style={{ color: '#666666' }}>LOADING</span>
              <span style={{ color: '#AAAAAA' }}>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
