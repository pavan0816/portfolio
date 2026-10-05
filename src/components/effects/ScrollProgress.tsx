'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[999] origin-left scroll-progress-gradient"
            style={{ scaleX }}
        >
            {/* Glow effect at the leading edge */}
            <motion.div
                className="absolute right-0 top-0 w-20 h-full"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 85, 0, 0.8), rgba(168, 85, 247, 0.6))',
                    filter: 'blur(4px)',
                }}
            />
        </motion.div>
    );
}
