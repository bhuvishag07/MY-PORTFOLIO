import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CertificatesGallery from '../components/Certificates/Certificates';

export default function Certificates() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '80px', paddingBottom: '100px' }}
        >
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                    CERTIFICATES
                </h1>
            </div>
            <CertificatesGallery />
        </motion.main>
    );
}
