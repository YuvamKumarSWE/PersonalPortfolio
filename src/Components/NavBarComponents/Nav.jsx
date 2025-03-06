import { NavLink } from "react-router-dom";
import { useState } from "react";
import './navbar.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-container">
            {/* Hamburger button */}
            <button className="hamburger" onClick={toggleMenu}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            {/* Navigation links */}
            <div className={`nav-links ${isOpen ? 'show' : ''}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav active" : "nav"}>About</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "nav active" : "nav"}>Projects</NavLink>
                <a 
                    href="https://drive.google.com/file/d/1tI1YDb495YwzzHpGVPyI-B0MJi7KfZbs/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                > 
                    <p className="nav">Resume</p> 
                </a> 
            </div>
        </div>
    );
}