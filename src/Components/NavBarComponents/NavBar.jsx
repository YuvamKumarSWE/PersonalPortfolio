import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './navbar.css';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar h-20 fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'blur-navbar' : ''
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                <Logo />
                <Nav />
            </div>
        </motion.nav>
    );
};

export default NavBar;