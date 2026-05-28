import { motion } from 'framer-motion';
import styles from './ResumeButton.module.css';

export default function ResumeButton() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/updated_cv.pdf';
        link.download = 'Bhuvisha_Gohil_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.button
            className={`glass-card ${styles.resumeBtn}`}
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            Download Resume
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
        </motion.button>
    );
}
