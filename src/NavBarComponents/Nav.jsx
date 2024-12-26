import { NavLink } from "react-router-dom";
import './navbar.css';

export default function Nav() {
    return (
        <div className="flex items-center space-x-4 flex-1 justify-end">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav active" : "nav"}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav active" : "nav"}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav active" : "nav"}>Contact</NavLink>
        </div>
    );
}