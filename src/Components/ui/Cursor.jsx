import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isDesktop, setIsDesktop] = useState(() => window.innerWidth > 1024);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    const color = isHovering ? '#00FFFF' : '#FF00FF';
    const size = isHovering ? 1.4 : 1;

    return (
        <>
            {/* Horizontal bar of crosshair */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 10,
                    y: mousePosition.y - 1,
                    scaleX: size,
                    backgroundColor: color,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                style={{
                    width: '20px',
                    height: '2px',
                    imageRendering: 'pixelated',
                    mixBlendMode: 'difference',
                }}
            />
            {/* Vertical bar of crosshair */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 1,
                    y: mousePosition.y - 10,
                    scaleY: size,
                    backgroundColor: color,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                style={{
                    width: '2px',
                    height: '20px',
                    imageRendering: 'pixelated',
                    mixBlendMode: 'difference',
                }}
            />
            {/* Center pixel */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 2,
                    y: mousePosition.y - 2,
                    backgroundColor: color,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                style={{
                    width: '4px',
                    height: '4px',
                    imageRendering: 'pixelated',
                    mixBlendMode: 'difference',
                }}
            />
        </>
    );
};

export default Cursor;
