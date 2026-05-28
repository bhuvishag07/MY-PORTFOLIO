import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>
                    Designed and built by <span className={styles.highlight}>Bhuvisha Gohil</span>
                </p>
                <div className={styles.links}>
                    <a href="https://github.com/bhuvishag07" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/bhuvisha-gohil-a81864386/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
