import { useEffect } from 'react';
import { motion } from 'framer-motion';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Footer from '../components/Footer/Footer';

export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '80px' }}
        >
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-mono)', fontWeight: '700', letterSpacing: '-0.03em' }}>
                    PROJECTS
                </h1>
                <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>Explore my latest building experiences.</p>
            </div>
            <FeaturedProjects />
            <Footer />
        </motion.main>
    );
}
