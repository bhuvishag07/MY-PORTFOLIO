import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useEmail = () => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (formData) => {
    setIsSending(true);
    setError(null);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    if (!serviceId || !templateId || !publicKey) {
      const missingMessage = 'Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.';
      setError(missingMessage);
      setIsSending(false);
      return { success: false, error: missingMessage, fallback: true };
    }

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_email: import.meta.env.VITE_CONTACT_EMAIL || 'bhuvishagohil07@gmail.com'
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      setIsSending(false);
      return { success: true, response };
    } catch (err) {
      console.error('Email sending failed:', err);
      const errorMessage = err?.text || err?.statusText || err?.message || 'Failed to send message. Please check credentials or try again later.';
      const fallback = /invalid|not configured|public key|service id|template id/i.test(errorMessage);
      setError(errorMessage);
      setIsSending(false);
      setTimeout(() => setError(null), 5000);
      return { success: false, error: errorMessage, fallback };
    }
  };

  return { sendEmail, isSending, error };
};
