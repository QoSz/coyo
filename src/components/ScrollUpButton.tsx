'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollUpButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const toggleVisibility = () => {
            // Throttle updates to reduce the number of re-renders
            const currentScrollY = window.scrollY;
            if (Math.abs(currentScrollY - lastScrollY) > 50) { // Only update visibility if significant scroll occurs
                setIsVisible(currentScrollY > 300);
                lastScrollY = currentScrollY;
            }
        }

        window.addEventListener('scroll', toggleVisibility, { passive: true });

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const scrollAnimation = () => {
            if (window.scrollY > 0) {
                window.scrollTo(0, Math.floor(window.scrollY * 0.8)); // Use exponential decay for smoother and faster scroll
                requestAnimationFrame(scrollAnimation);
            }
        };
        requestAnimationFrame(scrollAnimation);
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 bg-[#FF5722] text-white rounded-full shadow-lg hover:bg-[#E64A19] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:ring-offset-2 z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}