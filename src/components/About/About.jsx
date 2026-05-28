import { motion } from 'framer-motion';
import styles from './About.module.css';

const codeLines = [
    { type: 'keyword', text: 'const ' },
    { type: 'variable', text: 'student' },
    { type: 'plain', text: ' = {' },
];

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1, y: 0,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className={styles.aboutSection}>
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
            >
                {/* Section Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>My Journey</h2>
                    <div className={styles.line} />
                </div>
                <p className={styles.tagline}>Turning curiosity into creation through code.</p>

                <div className={styles.content}>
                    {/* Story Cards */}
                    <div className={styles.storyColumn}>
                        {[
                            {
                                label: '01',
                                heading: 'The Beginning',
                                text: 'I am Bhuvisha Gohil, a B.Tech Computer Science and Engineering student at ITM Skills University, School of Future Tech, Kharghar, currently maintaining a CGPA of 8.8 and expected to graduate in 2029.'
                            },
                            {
                                label: '02',
                                heading: 'The Curiosity',
                                text: 'My journey into technology began with curiosity and gradually evolved into a strong passion for building meaningful digital experiences through code. I enjoy transforming abstract ideas into practical interactive projects.'
                            },
                            {
                                label: '03',
                                heading: 'The Drive',
                                text: 'With strong interests in Data Science, Artificial Intelligence, Cybersecurity, and Software Development, I actively strengthen my skills through hackathons, hands-on projects, and continuous exploration.'
                            },
                            {
                                label: '04',
                                heading: 'The Belief',
                                text: 'I believe learning happens best through building, solving problems, and staying curious enough to grow every day.'
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                className={`glass-card ${styles.storyCard}`}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ x: 6 }}
                            >
                                <span className={styles.cardLabel}>{card.label}</span>
                                <h3 className={styles.cardHeading}>{card.heading}</h3>
                                <p className={styles.cardText}>{card.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Code Card */}
                    <motion.div
                        className={styles.codeCardWrapper}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={styles.codeBlock}>
                            <div className={styles.codeHeader}>
                                <span className={`${styles.dot} ${styles.red}`} />
                                <span className={`${styles.dot} ${styles.yellow}`} />
                                <span className={`${styles.dot} ${styles.green}`} />
                                <span className={styles.codeFileName}>student.js</span>
                            </div>
                            <pre className={styles.code}>
                                <code>
                                    <span className={styles.keyword}>const </span>
                                    <span className={styles.variable}>student</span>
                                    <span className={styles.plain}> = {'{'}</span>{'\n'}
                                    {'  '}<span className={styles.prop}>name</span><span className={styles.plain}>: </span><span className={styles.string}>&quot;Bhuvisha Gohil&quot;</span><span className={styles.plain}>,</span>{'\n'}
                                    {'  '}<span className={styles.prop}>university</span><span className={styles.plain}>: </span><span className={styles.string}>&quot;ITM Skills University&quot;</span><span className={styles.plain}>,</span>{'\n'}
                                    {'  '}<span className={styles.prop}>school</span><span className={styles.plain}>: </span><span className={styles.string}>&quot;School of Future Tech&quot;</span><span className={styles.plain}>,</span>{'\n'}
                                    {'  '}<span className={styles.prop}>degree</span><span className={styles.plain}>: </span><span className={styles.string}>&quot;B.Tech CSE&quot;</span><span className={styles.plain}>,</span>{'\n'}
                                    {'  '}<span className={styles.prop}>cgpa</span><span className={styles.plain}>: </span><span className={styles.string}>&quot;8.8&quot;</span><span className={styles.plain}>,</span>{'\n'}
                                    {'  '}<span className={styles.prop}>graduation</span><span className={styles.plain}>: </span><span className={styles.string}>&quot;2029&quot;</span><span className={styles.plain}>,</span>{'\n'}
                                    {'  '}<span className={styles.prop}>interests</span><span className={styles.plain}>: [</span>{'\n'}
                                    {'    '}<span className={styles.string}>&quot;AI&quot;</span><span className={styles.plain}>,</span>{'\n'}
                                    {'    '}<span className={styles.string}>&quot;Data Science&quot;</span><span className={styles.plain}>,</span>{'\n'}
                                    {'    '}<span className={styles.string}>&quot;Cybersecurity&quot;</span><span className={styles.plain}>,</span>{'\n'}
                                    {'    '}<span className={styles.string}>&quot;Software Development&quot;</span>{'\n'}
                                    {'  '}<span className={styles.plain}>],</span>{'\n'}
                                    {'  '}<span className={styles.prop}>learner</span><span className={styles.plain}>: </span><span className={styles.boolean}>true</span>{'\n'}
                                    <span className={styles.plain}>{'}'}</span>
                                </code>
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
