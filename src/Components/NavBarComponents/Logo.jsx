import './navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Logo() {
    const [glitching, setGlitching] = useState(false);

    const handleMouseEnter = () => {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 600);
    };

    return (
        <Link to="/" className="logo-container">
            <motion.div
                className="flex items-center"
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onMouseEnter={handleMouseEnter}
            >
                <motion.h1
                    className={`logo-text font-press-start${glitching ? ' glitch' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    YK
                    <span style={{ color: '#FF00FF' }}>.</span>
                    <span
                        className="blink"
                        style={{ color: '#FF00FF', marginLeft: '2px' }}
                    >_</span>
                </motion.h1>
            </motion.div>
        </Link>
    );
}
