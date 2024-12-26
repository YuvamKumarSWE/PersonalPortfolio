import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar  h-16 fixed top-0 w-full z-50 flex items-center justify-between px-4">
            <Logo />
            <Nav />
        </nav>
    );
};

export default NavBar;