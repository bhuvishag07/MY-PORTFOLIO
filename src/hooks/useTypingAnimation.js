import { useState, useEffect } from 'react';

export function useTypingAnimation(titles) {
    const [text, setText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentString = titles[titleIndex];
        const typeSpeed = isDeleting ? 45 : 90;
        const pauseDelay = isDeleting && text === '' ? 300 : (text === currentString ? 2000 : typeSpeed);

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (text === currentString) {
                    setIsDeleting(true);
                } else {
                    setText(currentString.slice(0, text.length + 1));
                }
            } else {
                if (text === '') {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                } else {
                    setText(text.slice(0, text.length - 1));
                }
            }
        }, pauseDelay);

        return () => clearTimeout(timer);
    }, [text, isDeleting, titleIndex, titles]);

    return { text };
}
