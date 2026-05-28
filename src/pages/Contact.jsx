import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/Contact/Contact";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        paddingTop: "80px",
        paddingBottom: "100px",
        maxWidth: "900px",
        margin: "0 auto",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "3rem",
            fontFamily: "var(--font-mono)",
            color: "var(--accent-purple)",
          }}
        >
          /contact
        </motion.h1>

        <p style={{ opacity: 0.7, marginTop: "10px" }}>
          Got a project or idea? Send me a message 🚀
        </p>
      </div>

      {/* Form Section */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ContactForm />
      </motion.div>
    </motion.main>
  );
}