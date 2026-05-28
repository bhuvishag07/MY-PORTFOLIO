import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const renderCategory = (title, items) => (
        <motion.div className={`glass-card ${styles.categoryCard}`} variants={itemVariants}>
            <h3 className={styles.categoryTitle}>{title}</h3>
            <div className={styles.skillsGrid}>
                {items.map((skill, index) => (
                    <motion.div
                        key={index}
                        className={styles.skillBadge}
                        whileHover={{ y: -5, scale: 1.05, backgroundColor: 'rgba(196,164,247,0.15)', borderColor: 'var(--accent-purple)' }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section className={styles.skillsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>System Capabilities</h2>
                    <div className={styles.line} />
                </div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {renderCategory("Languages", skills.languages)}
                    {renderCategory("Frameworks & Tech", skills.frameworks)}
                    {renderCategory("Tools", skills.tools)}
                    {renderCategory("Soft Skills", skills.softSkills)}
                </motion.div>
            </div>
        </section>
    );
}
