import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './navbar.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.nav-container')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Experience", path: "/experience" },
        { name: "Resume", path: "https://drive.google.com/file/d/1TTAAmm-GkSXFrVPD64hHAJRL4WwiOIHE/view?usp=sharing", external: true }
    ];

    const hamburgerVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 }
    };

    const lineVariants = {
        closed: {
            rotate: 0,
            y: 0,
            opacity: 1,
        },
        open: (i) => ({
            rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
            y: i === 0 ? 6 : i === 2 ? -6 : 0,
            opacity: i === 1 ? 0 : 1,
        }),
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            scale: 0.95,
        },
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
        }
    };

    const itemVariants = {
        closed: {
            opacity: 0,
            y: 20,
        },
        open: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
            },
        }),
    };

    return (
        <div className="nav-container">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
                {navItems.map((item, index) => (
                    <div key={item.name}>
                        {item.external ? (
                            <motion.a
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                            >
                                {item.name}
                            </motion.a>
                        ) : (
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => 
                                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                                }
                            >
                                {({ isActive }) => (
                                    <motion.span
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </NavLink>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Hamburger */}
            <motion.button
                className="hamburger md:hidden"
                onClick={toggleMenu}
                variants={hamburgerVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                aria-label="Toggle navigation menu"
            >
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="hamburger-line"
                        variants={lineVariants}
                        custom={i}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="mobile-menu-content">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    variants={itemVariants}
                                    custom={index}
                                    className="mobile-nav-item"
                                >
                                    {item.external ? (
                                        <motion.a
                                            href={item.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mobile-nav-link"
                                            onClick={() => setIsOpen(false)}
                                            whileHover={{ x: 8 }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span>{item.name}</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </motion.a>
                                    ) : (
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) => 
                                                `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
                                            }
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {({ isActive }) => (
                                                <motion.div
                                                    whileHover={{ x: 8 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex items-center justify-between w-full"
                                                >
                                                    <span>{item.name}</span>
                                                    {isActive && (
                                                        <motion.div
                                                            className="w-2 h-2 bg-blue-600 rounded-full"
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                        />
                                                    )}
                                                </motion.div>
                                            )}
                                        </NavLink>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}