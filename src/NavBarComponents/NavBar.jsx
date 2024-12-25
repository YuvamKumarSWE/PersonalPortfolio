import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Logo />
            <Nav />
        </nav>
        
    );
};

export default NavBar;