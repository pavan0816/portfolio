"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function TechStackSection() {
    const tools = [...portfolioData.techStack, ...portfolioData.techStack];
    const toolsReverse = [...portfolioData.techStack].reverse();
    const toolsReverseDup = [...toolsReverse, ...toolsReverse];
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="py-24 bg-background dark:bg-black border-y border-zinc-200 dark:border-zinc-900 overflow-hidden relative">
            {/* Section header */}
            <div className="max-w-[1400px] mx-auto px-6 text-center mb-16">
                <motion.span
                    className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Tech Stack
                </motion.span>
                <motion.h2
                    className="text-3xl md:text-4xl font-black tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Powered by Modern Technologies
                </motion.h2>
            </div>

            {/* Row 1 — left to right */}
            <div
                className="relative flex overflow-x-hidden mb-8 group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-12 items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    style={{
                        animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                >
                    {tools.map((tech, idx) => (
                        <TechIcon key={`row1-${idx}`} tech={tech} />
                    ))}
                </motion.div>
            </div>

            {/* Row 2 — right to left (reverse direction) */}
            <div
                className="relative flex overflow-x-hidden group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-12 items-center whitespace-nowrap"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35,
                    }}
                    style={{
                        animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                >
                    {toolsReverseDup.map((tech, idx) => (
                        <TechIcon key={`row2-${idx}`} tech={tech} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function TechIcon({ tech }: { tech: { name: string; icon: string } }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="flex flex-col items-center justify-center gap-3 min-w-[120px] cursor-default relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <motion.div
                className="w-16 h-16 relative flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                animate={isHovered ? {
                    borderColor: "rgba(168, 85, 247, 0.5)",
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.15)",
                } : {
                    borderColor: "rgba(161, 161, 170, 0.2)",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
                transition={{ duration: 0.3 }}
            >
                {/* Glow behind icon */}
                <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        background: isHovered
                            ? "radial-gradient(circle, rgba(168, 85, 247, 0.1), transparent 70%)"
                            : "none",
                    }}
                    transition={{ duration: 0.3 }}
                />

                <motion.img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 object-contain dark:invert relative z-10"
                    animate={{
                        filter: isHovered ? "grayscale(0)" : "grayscale(1)",
                        opacity: isHovered ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            {/* Name with spring scale */}
            <motion.span
                className="text-sm font-bold text-foreground"
                animate={{
                    scale: isHovered ? 1.1 : 1,
                    opacity: isHovered ? 1 : 0.6,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {tech.name}
            </motion.span>
        </motion.div>
    );
}
