import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Stats.module.css';

const Counter = ({ from = 0, to, duration = 2 }) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = null;
            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / (duration * 1000), 1);
                setCount(Math.floor(progress * (to - from) + from));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, to, from, duration]);

    return <span ref={ref}>{count}</span>;
}

export default function Stats() {
    const stats = [
        { label: "Projects Built", value: 14, suffix: "+" },
        { label: "Certificates Earned", value: 2, suffix: "" },
        { label: "Skills Learned", value: 12, suffix: "+" },
        { label: "Learning Progress", value: 100, suffix: "%" }
    ];

    return (
        <section className={styles.statsSection}>
            <div className={styles.container}>
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        className={`glass-card ${styles.statCard}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <h3 className={styles.value}>
                            <Counter to={stat.value} />{stat.suffix}
                        </h3>
                        <p className={styles.label}>{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
