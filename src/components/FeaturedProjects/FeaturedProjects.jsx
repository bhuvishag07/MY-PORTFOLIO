import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
    return (
        <section id="projects" className={styles.featuredSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Project Directory</h2>
                    <div className={styles.line} />
                </div>

                <div className={styles.grid}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            className={`glass-card ${styles.projectCard}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={styles.imageContainer}>
                                <img src={project.image} alt={project.title} className={styles.image} loading="lazy" />
                                <div className={styles.overlay}>
                                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                                        View Repository
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.techStack}>
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className={styles.techBadge}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
