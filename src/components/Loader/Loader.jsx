import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.css';

const PHASES = {
    LINE: 'line',
    FIRST: 'first',   // first name sweeps in
    LAST: 'last',     // surname sweeps in
    GLOW: 'glow',
    TYPING: 'typing',
    EDU: 'edu',
};

const TYPING_TEXT = 'CSE Student · Curious Coder · Tech Explorer';

export default function Loader({ onComplete }) {
    const [phase, setPhase] = useState(PHASES.LINE);
    const [typedText, setTypedText] = useState('');
    const [showEdu, setShowEdu] = useState(false);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        // Stagger the phases for a cinematic, longer experience
        const t1 = setTimeout(() => setPhase(PHASES.FIRST), 1400);  // first name sweeps
        const t2 = setTimeout(() => setPhase(PHASES.LAST), 3000);  // surname sweeps
        const t3 = setTimeout(() => setPhase(PHASES.GLOW), 4600);
        const t4 = setTimeout(() => setPhase(PHASES.TYPING), 5400);
        const t5 = setTimeout(() => setShowEdu(true), 6800);
        const t6 = setTimeout(() => setExiting(true), 11500);
        const t7 = setTimeout(() => onComplete(), 12300);
        return () => [t1, t2, t3, t4, t5, t6, t7].forEach(clearTimeout);
    }, [onComplete]);

    // Typing effect starts at TYPING phase
    useEffect(() => {
        if (phase !== PHASES.TYPING) return;
        let i = 0;
        const id = setInterval(() => {
            i++;
            setTypedText(TYPING_TEXT.slice(0, i));
            if (i >= TYPING_TEXT.length) clearInterval(id);
        }, 120);
        return () => clearInterval(id);
    }, [phase]);

    const firstVisible = phase !== PHASES.LINE;
    const lastVisible = phase === PHASES.LAST || phase === PHASES.GLOW ||
        phase === PHASES.TYPING || phase === PHASES.EDU || showEdu;

    return (
        <AnimatePresence>
            {!exiting && (
                <motion.div
                    className={styles.loader}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
                >
                    {/* Horizontal expanding line */}
                    <motion.div
                        className={styles.line}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />

                    {/* Purple glow orb */}
                    {(phase === PHASES.GLOW || phase === PHASES.TYPING || showEdu) && (
                        <motion.div
                            className={styles.glowOrb}
                            initial={{ opacity: 0, scale: 0.4 }}
                            animate={{ opacity: [0, 0.5, 0.25], scale: [0.4, 1.3, 1] }}
                            transition={{ duration: 1.8, ease: 'easeOut' }}
                        />
                    )}

                    <div className={styles.centerContent}>
                        {/* ── FIRST NAME ── sweeps from far left */}
                        <div className={styles.nameRow}>
                            <motion.span
                                className={styles.nameWord}
                                initial={{ x: '-110vw', opacity: 0, filter: 'blur(16px)' }}
                                animate={firstVisible
                                    ? { x: 0, opacity: 1, filter: 'blur(0px)' }
                                    : {}}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                BHUVISHA
                            </motion.span>
                        </div>

                        {/* ── SURNAME ── sweeps from far left after first name settles */}
                        <div className={styles.nameRow}>
                            <motion.span
                                className={`${styles.nameWord} ${styles.nameAccent}`}
                                initial={{ x: '-110vw', opacity: 0, filter: 'blur(16px)' }}
                                animate={lastVisible
                                    ? { x: 0, opacity: 1, filter: 'blur(0px)' }
                                    : {}}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                GOHIL
                            </motion.span>
                        </div>

                        {/* Underline */}
                        {lastVisible && (
                            <motion.div
                                className={styles.nameUnderline}
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            />
                        )}

                        {/* Typing subtitle */}
                        <motion.div
                            className={styles.subtitle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: (phase === PHASES.TYPING || showEdu) ? 1 : 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className={styles.typedText}>{typedText}</span>
                            <span className={styles.cursor}>|</span>
                        </motion.div>

                        {/* Education block */}
                        <AnimatePresence>
                            {showEdu && (
                                <motion.div
                                    className={styles.eduBlock}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <p>B.Tech Computer Science &amp; Engineering</p>
                                    <p>ITM Skills University&nbsp;·&nbsp;School of Future Tech</p>
                                    <p>CGPA:&nbsp;8.8&nbsp;·&nbsp;Expected Graduation: 2029</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
