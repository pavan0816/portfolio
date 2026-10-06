'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Constellation } from '@/components/effects/Constellation';

interface LoadingScreenProps {
    onComplete?: () => void;
    onExitStart?: () => void;
    duration?: number;
}

export function LoadingScreen({ onComplete, onExitStart, duration }: LoadingScreenProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Animated progress bar
    useEffect(() => {
        const totalDuration = duration || 2500;
        const interval = 30;
        const steps = totalDuration / interval;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            // Ease-out curve for progress
            const p = 1 - Math.pow(1 - step / steps, 3);
            setProgress(Math.min(p * 100, 100));
            if (step >= steps) {
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [duration]);

    const handleAnimationComplete = () => {
        setIsLoading(false);
        onExitStart?.();
        setTimeout(() => {
            onComplete?.();
        }, 100);
    };

    const text = "InfusionX";
    const letterVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.8, filter: "blur(12px)", rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            rotateX: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    // Color wave for each letter
    const getLetterColor = (index: number) => {
        const colors = [
            '#ffffff',
            '#f0f0f0',
            '#e0e0e0',
            '#d0d0d0',
            '#ffffff',
            '#f5f5f5',
            '#e8e8e8',
            '#ffffff',
            '#f0f0f0',
        ];
        return colors[index % colors.length];
    };

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 1.2,
                            ease: [0.7, 0, 0.3, 1]
                        }
                    }}
                    className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-background overflow-hidden will-change-transform"
                >
                    {/* Dark Constellation Background */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-0 bg-black overflow-hidden"
                    >
                        <Constellation />
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                            opacity: 0,
                            scale: 1.1,
                            filter: "blur(10px)",
                            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
                        }}
                        className="relative z-10 flex flex-col items-center justify-center w-full max-w-[600px] will-change-transform"
                    >
                        {/* Title with letter animation */}
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            onAnimationComplete={handleAnimationComplete}
                            transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
                            className="flex text-6xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-display font-black tracking-tight uppercase will-change-transform drop-shadow-2xl pr-4 py-4 text-gradient-premium"
                            style={{ perspective: "600px" }}
                        >
                            {"INFUSIONX".split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    style={{
                                        display: 'inline-block',
                                        transformOrigin: 'center bottom',
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {/* Progress bar */}
                        <motion.div
                            className="w-48 h-[2px] bg-white/10 rounded-full mt-8 overflow-hidden"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-white/40 via-white/70 to-white/40 rounded-full"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Subtle aesthetic dots */}
                    <div className="absolute bottom-12 flex gap-2">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    opacity: [0.2, 0.6, 0.2],
                                    scale: [0.8, 1, 0.8],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                }}
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                                className="w-1.5 h-1.5 rounded-full bg-white/30"
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}