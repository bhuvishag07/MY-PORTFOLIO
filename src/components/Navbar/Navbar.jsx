import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate(`/#${targetId}`);
            // Small delay to allow navigation to homeostasis before scrolling
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (targetId === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <motion.nav
            className={styles.navbar}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className={styles.navContainer}>
                <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className={styles.logo}>
                    BG.
                </a>
                <div className={styles.navLinks}>
                    <a href="#about" onClick={(e) => handleScroll(e, 'about')} className={styles.navLink}>About</a>
                    <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className={styles.navLink}>Skills</a>
                    <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className={styles.navLink}>Projects</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className={styles.navLink}>Contact</a>
                </div>
            </div>
        </motion.nav>
    );
}
