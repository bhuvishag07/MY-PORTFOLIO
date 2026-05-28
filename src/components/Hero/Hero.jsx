import { useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';

export default function Hero() {
    const titles = useMemo(
        () => [
            'Building The Future With Code',
            'CS Student & Builder',
            'Tech Explorer'
        ],
        []
    );

    const { text } = useTypingAnimation(titles);

    return (
        <section className={styles.heroSection}>
            {/* Subtle ambient glow */}
            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >


                    {/* Name */}
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        BHUVISHA GOHIL
                    </motion.h1>

                    {/* Typing subtitle */}
                    <motion.h2
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className={styles.typingText}>{text}</span>
                        <span className={styles.cursor}>|</span>
                    </motion.h2>

                    {/* Education card */}
                    <motion.div
                        className={`glass-card ${styles.eduCard}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.5,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className={styles.eduGrid}>
                            <div className={styles.eduItem}>
                                <span className={styles.eduLabel}>Degree</span>
                                <span className={styles.eduValue}>
                                    B.Tech Computer Science &amp; Engineering
                                </span>
                            </div>

                            <div className={styles.eduItem}>
                                <span className={styles.eduLabel}>University</span>
                                <span className={styles.eduValue}>
                                    ITM Skills University · School of Future Tech
                                </span>
                            </div>

                            <div className={styles.eduItem}>
                                <span className={styles.eduLabel}>Location</span>
                                <span className={styles.eduValue}>
                                    Kharghar, Navi Mumbai
                                </span>
                            </div>

                            <div className={styles.eduItem}>
                                <span className={styles.eduLabel}>CGPA</span>
                                <span
                                    className={`${styles.eduValue} ${styles.highlight}`}
                                >
                                    8.8
                                </span>
                            </div>

                            <div className={styles.eduItem}>
                                <span className={styles.eduLabel}>Graduation</span>
                                <span className={styles.eduValue}>
                                    Expected 2029
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                className={styles.scrollHint}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <motion.div
                    className={styles.scrollDot}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.8,
                        ease: 'easeInOut'
                    }}
                />
            </motion.div>
        </section>
    );
}