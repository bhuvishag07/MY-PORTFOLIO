import { motion } from 'framer-motion';
import { projectArchive } from '../../data/projects';
import styles from './ProjectArchive.module.css';

export default function ProjectArchive() {
    return (
        <section className={styles.archiveSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Project Archive</h2>
                    <div className={styles.line} />
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th className={styles.hideMobile}>Built with</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projectArchive.map((project, idx) => (
                                <motion.tr
                                    key={project.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className={styles.row}
                                >
                                    <td className={styles.projectTitle}>{project.title}</td>
                                    <td className={`${styles.tech} ${styles.hideMobile}`}>Various Core Tech</td>
                                    <td>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                            github.com ↗
                                        </a>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
