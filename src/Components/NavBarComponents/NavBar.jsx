import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './navbar.css';

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
        <nav
            className={`navbar h-16 fixed top-0 w-full z-50 flex items-center justify-between px-4  ${
                isScrolled ? 'blur-navbar' : ''
            }`}
        >
            <Logo />
            <Nav />
        </nav>
    );
};

export default NavBar;