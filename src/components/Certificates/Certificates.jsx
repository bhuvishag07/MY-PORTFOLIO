import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../../data/certificates';
import styles from './Certificates.module.css';

export default function Certificates() {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section className={styles.certSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Certifications</h2>
                    <div className={styles.line} />
                </div>

                <div className={styles.grid}>
                    {certificates.map(cert => (
                        <motion.div
                            layoutId={`card-${cert.id}`}
                            className={`glass-card ${styles.card}`}
                            key={cert.id}
                            onClick={() => setSelectedId(cert.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.img
                                src={cert.image}
                                alt={cert.title}
                                className={styles.image}
                                layoutId={`image-${cert.id}`}
                            />
                            <motion.h3 layoutId={`title-${cert.id}`} className={styles.cardTitle}>
                                {cert.title}
                            </motion.h3>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            className={styles.overlay}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        >
                            {certificates.filter(c => c.id === selectedId).map(cert => (
                                <motion.div
                                    className={`glass-card ${styles.modal}`}
                                    layoutId={`card-${cert.id}`}
                                    key={cert.id}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <motion.img
                                        src={cert.image}
                                        alt={cert.title}
                                        className={styles.modalImage}
                                        layoutId={`image-${cert.id}`}
                                    />
                                    <div className={styles.modalContent}>
                                        <motion.h3 layoutId={`title-${cert.id}`} className={styles.modalTitle}>
                                            {cert.title}
                                        </motion.h3>
                                        <motion.p
                                            className={styles.modalDesc}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {cert.description}
                                        </motion.p>
                                        <button className={styles.closeBtn} onClick={() => setSelectedId(null)}>
                                            Close
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
