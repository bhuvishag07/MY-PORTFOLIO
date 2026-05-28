import { motion } from 'framer-motion';
import styles from './Toolkit.module.css';

const techList = [
    {
        name: 'React',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
            </svg>
        )
    },
    {
        name: 'JavaScript',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="3" fill="#F7DF1E" />
                <text x="3" y="20" fontSize="14" fontWeight="bold" fontFamily="Arial" fill="#000">JS</text>
            </svg>
        )
    },
    {
        name: 'HTML5',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0L3 18l9 2.5L21 18 22.5 0z" fill="#E34F26" />
                <path d="M12 2v18.4l7.5-2L21 2z" fill="#EF652A" />
                <path d="M5.5 4.5h13L17 16l-5 1.4-5-1.4-.4-4h2.5l.2 2 2.7.7 2.7-.7.3-3H5.8z" fill="#fff" />
            </svg>
        )
    },
    {
        name: 'CSS3',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0L3 18l9 2.5L21 18 22.5 0z" fill="#1572B6" />
                <path d="M12 2v18.4l7.5-2L21 2z" fill="#33A9DC" />
                <path d="M5.5 4.5h13-.3L17 13l-5 1.4-5-1.4-.2-2h2.5l.1 1 2.6.7 2.6-.7.3-3.5H6.2L5.9 7.5h9.6l.2-3z" fill="#fff" />
            </svg>
        )
    },
    {
        name: 'Bootstrap',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#7952B3" />
                <text x="4" y="18" fontSize="14" fontWeight="900" fontFamily="Arial" fill="#fff">B</text>
            </svg>
        )
    },
    {
        name: 'C++',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="3" fill="#00599C" />
                <text x="2" y="17" fontSize="10" fontWeight="bold" fontFamily="Arial" fill="#fff">C++</text>
            </svg>
        )
    },
    {
        name: 'Python',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C7 2 7.5 4 7.5 4v2.5h5v1h-7S3 7.2 3 12s2.8 4.5 2.8 4.5H7.5V14s-.1-2.8 2.8-2.8h4.5s2.7 0 2.7-2.7V6s.4-4-5.5-4zm-1.5 1.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776AB" />
                <path d="M12 22c5 0 4.5-2 4.5-2v-2.5h-5v-1h7S21 16.8 21 12s-2.8-4.5-2.8-4.5H16.5V10s.1 2.8-2.8 2.8H9.2S6.5 12.8 6.5 15.5V18s-.4 4 5.5 4zm1.5-1.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#FFD43B" />
            </svg>
        )
    },
    {
        name: 'GitHub',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        )
    },
    {
        name: 'Framer Motion',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 3h16L12 12 4 3z" fill="#BB4AE8" />
                <path d="M4 3l8 9v9l-8-9V3z" fill="#9B2FD3" />
                <path d="M12 12v9l8-9H12z" fill="#C97EF0" />
            </svg>
        )
    },
    {
        name: 'Styled Comp.',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#DB7093" />
                <text x="3.5" y="16" fontSize="10" fontWeight="bold" fontFamily="Arial" fill="#fff">💅</text>
            </svg>
        )
    },
];

export default function Toolkit() {
    return (
        <section className={styles.toolkitSection}>
            <motion.div
                className={styles.sectionHeader}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2 className={styles.sectionTitle}>Tech Toolkit</h2>
                <div className={styles.headerLine} />
            </motion.div>

            <div className={styles.overlay} />
            <div className={styles.tickerContainer}>
                <motion.div
                    className={styles.ticker}
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
                >
                    {[...techList, ...techList].map((tech, i) => (
                        <motion.div
                            key={i}
                            className={`glass-card ${styles.techItem}`}
                            whileHover={{ scale: 1.06, borderColor: 'rgba(196,164,247,0.3)' }}
                        >
                            <div className={styles.iconWrapper}>{tech.icon}</div>
                            <span>{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
