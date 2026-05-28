import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import ResumeButton from '../ResumeButton/ResumeButton';
import { useEmail } from '../../hooks/useEmail';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const { sendEmail, isSending, error: emailError } = useEmail();

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        const result = await sendEmail(formData);
        if (result.success) {
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } else if (result.fallback) {
            // EmailJS not configured or invalid keys — do not open mail client automatically.
            // `useEmail` sets an error message which will be displayed in the UI. Provide
            // a helpful message so you can configure EmailJS to enable direct sends.
            // If you'd like the old behavior (open mail client), tell me and I can restore it.
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Establish Connection</h2>
                    <div className={styles.line} />
                </div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h3 className={styles.subtitle}>Let's build meaningful digital experiences through code.</h3>
                        <p className={styles.description}>
                            I'm always open to discussing new ideas, learning opportunities, and collaborations. Feel free to reach out through any of these platforms.
                        </p>

                        <div className={styles.socialButtons}>
                            <a href="mailto:bhuvishagohil07@gmail.com" className={`glass-card ${styles.socialBtn}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                Email
                            </a>
                            <a href="https://github.com/bhuvishag07" target="_blank" rel="noopener noreferrer" className={`glass-card ${styles.socialBtn}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/bhuvisha-gohil-a81864386/" target="_blank" rel="noopener noreferrer" className={`glass-card ${styles.socialBtn}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                LinkedIn
                            </a>
                            <div className={styles.resumeWrapper}>
                                <ResumeButton />
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className={`glass-card ${styles.form}`}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? styles.inputError : ''}
                                placeholder="Entering name..."
                            />
                            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? styles.inputError : ''}
                                placeholder="Entering email..."
                            />
                            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? styles.inputError : ''}
                                placeholder="How can I help you?"
                            />
                            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                        </div>

                        <button type="submit" disabled={isSending} className={styles.submitBtn}>
                            {isSending ? 'Transmitting...' : 'Send Message'}
                        </button>

                        {success && (
                            <motion.div className={styles.successMessage} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                Message sent successfully.
                            </motion.div>
                        )}

                        {emailError && (
                            <motion.div className={styles.errorMessage} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                {emailError}
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>

            {/* Final CTA Section */}
            <motion.div
                className={styles.finalCta}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2>Let’s Work Together</h2>
                <p>Let’s build meaningful digital experiences through creativity, curiosity, and code.</p>
                <a href="mailto:bhuvishagohil07@gmail.com" className={styles.ctaBtn}>Get In Touch</a>
            </motion.div>
        </section>
    );
}
