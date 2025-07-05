import './navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link to="/" className="logo-container">
            <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                {/* Name with original styling */}
                <motion.h1 
                    className="logo-text font-orbitron font-bold text-2xl text-black"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Yuvam Kumar
                </motion.h1>
            </motion.div>
        </Link>
    );
}