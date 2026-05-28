import { AnimatePresence } from 'framer-motion';
import { useLoader } from '../hooks/useLoader';
import Loader from '../components/Loader/Loader';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Stats from '../components/Stats/Stats';
import Toolkit from '../components/Toolkit/Toolkit';
import Skills from '../components/Skills/Skills';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home() {
    const { loading, completeLoading } = useLoader();

    return (
        <>
            <AnimatePresence>
                {loading && <Loader onComplete={completeLoading} />}
            </AnimatePresence>

            {!loading && (
                <main>
                    <div id="hero">
                        <Hero />
                    </div>
                    <div id="about">
                        <About />
                    </div>
                    <Stats />
                    <Toolkit />
                    <div id="skills">
                        <Skills />
                    </div>
                    <div id="projects">
                        <FeaturedProjects />
                    </div>
                    <div id="contact">
                        <Contact />
                    </div>
                    <Footer />
                </main>
            )}
        </>
    );
}
