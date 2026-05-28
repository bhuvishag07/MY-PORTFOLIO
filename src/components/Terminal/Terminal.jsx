import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Terminal.module.css';

export default function Terminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState([{ type: 'output', text: 'Terminal ready. Type "help" for commands.' }]);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            setInput('');

            const newHistory = [...history, { type: 'input', text: cmd }];

            switch (cmd) {
                case 'about':
                case 'home':
                    navigate('/');
                    newHistory.push({ type: 'output', text: 'Navigating to Home...' });
                    setTimeout(() => setIsOpen(false), 800);
                    break;
                case 'projects':
                    navigate('/projects');
                    newHistory.push({ type: 'output', text: 'Navigating to Projects...' });
                    setTimeout(() => setIsOpen(false), 800);
                    break;
                case 'certificates':
                    navigate('/certificates');
                    newHistory.push({ type: 'output', text: 'Navigating to Certificates...' });
                    setTimeout(() => setIsOpen(false), 800);
                    break;
                case 'contact':
                    navigate('/contact');
                    newHistory.push({ type: 'output', text: 'Navigating to Contact...' });
                    setTimeout(() => setIsOpen(false), 800);
                    break;
                case 'skills':
                    navigate('/');
                    newHistory.push({ type: 'output', text: 'Navigating to Skills section...' });
                    setTimeout(() => {
                        setIsOpen(false);
                        window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' });
                    }, 800);
                    break;
                case 'resume':
                    window.open('/updated cv.pdf', '_blank');
                    newHistory.push({ type: 'output', text: 'Opening resume...' });
                    break;
                case 'clear':
                    setHistory([]);
                    return;
                case 'help':
                    newHistory.push({ type: 'output', text: 'Available commands: about, projects, skills, contact, certificates, resume, clear' });
                    break;
                case '':
                    break;
                default:
                    newHistory.push({ type: 'output', text: `Command not found: ${cmd}. Type "help" for available commands.` });
            }

            setHistory(newHistory);
        }
    };

    return (
        <>
            <motion.button
                className={`glass-card ${styles.floatingIcon}`}
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className={`glass-card ${styles.terminalWindow}`}
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={styles.header}>
                                <div className={styles.dots}>
                                    <span className={styles.dotRed} onClick={() => setIsOpen(false)}></span>
                                    <span className={styles.dotYellow}></span>
                                    <span className={styles.dotGreen}></span>
                                </div>
                                <div className={styles.title}>guest@bhuvisha.exe: ~</div>
                            </div>

                            <div className={styles.body} ref={scrollRef} onClick={() => inputRef.current?.focus()}>
                                {history.map((line, i) => (
                                    <div key={i} className={line.type === 'input' ? styles.inputLine : styles.outputLine}>
                                        {line.type === 'input' && <span className={styles.prompt}>$ </span>}
                                        {line.text}
                                    </div>
                                ))}

                                <div className={styles.activeInput}>
                                    <span className={styles.prompt}>$ </span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleCommand}
                                        autoFocus
                                        autoComplete="off"
                                        spellCheck="false"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
