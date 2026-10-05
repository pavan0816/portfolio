"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap, Layers, Rocket, Headphones } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useRef, useState } from "react";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { CinematicHover } from "@/components/ui/CinematicHover";

const getIcon = (name: string) => {
    switch (name) {
        case "AI-First Development": return <Rocket className="w-6 h-6 text-indigo-500" />;
        case "Scalable Architecture": return <Layers className="w-6 h-6 text-emerald-500" />;
        case "Fast Delivery": return <Zap className="w-6 h-6 text-amber-500" />;
        case "Reliable Support": return <Headphones className="w-6 h-6 text-pink-500" />;
        case "Business-Focused": return <Shield className="w-6 h-6 text-sky-500" />;
        default: return <CheckCircle className="w-6 h-6 text-primary" />;
    }
}

// 3D tilt card component
function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: y * -15, y: x * 15 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.12,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                damping: 15,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.2s ease-out",
            }}
            className="relative group"
        >
            {/* Animated gradient border on hover */}
            <motion.div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4, #a855f7)",
                    backgroundSize: "300% 300%",
                }}
                animate={isHovered ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Animated background glow */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.05), transparent 70%)",
                    }}
                />

                {/* Icon with rotating gradient background */}
                <div className="relative w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-hidden">
                    {/* Rotating gradient behind icon */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        style={{
                            background: "conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.15), transparent, rgba(59, 130, 246, 0.15), transparent)",
                        }}
                    />
                    <div className="relative z-10 bg-white dark:bg-black rounded-full w-full h-full flex items-center justify-center">
                        <motion.div
                            animate={isHovered ? { rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
                {/* Content rendered by parent */}
            </div>
        </motion.div>
    );
}

export default function WhyChooseUsSection() {
    return (
        <CinematicSection parallaxOffset={40} id="why-us" className="py-24 px-6 max-w-[1400px] mx-auto z-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.span
                            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Why Choose InfusionX
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            {"The intelligent choice for modern businesses.".split(" ").map((word, i) => (
                                <motion.span
                                    key={i}
                                    className="inline-block mr-[0.3em]"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        We don't just write code; we build strategic digital assets. Our approach combines deep technical expertise in artificial intelligence with a relentless focus on solving real-world business problems.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {portfolioData.softSkills.map((skill, idx) => (
                        <CinematicHover key={idx} tiltAmount={15} magneticStrength={0.05} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: idx * 0.12,
                                    duration: 0.7,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                }}
                                className="relative group bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-500 overflow-hidden h-full"
                            >
                                {/* Hover gradient border */}
                            <motion.div
                                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                style={{
                                    background: "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4, #a855f7)",
                                    backgroundSize: "300% 300%",
                                }}
                            />

                            {/* Animated glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                                style={{
                                    background: "radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.06), transparent 60%)",
                                }}
                            />

                            {/* Icon */}
                            <div className="relative w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        background: "conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.15), transparent, rgba(59, 130, 246, 0.15), transparent)",
                                    }}
                                />
                                <div className="relative z-10 bg-white dark:bg-black rounded-full w-full h-full flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {getIcon(skill.name)}
                                    </motion.div>
                                </div>
                            </div>

                            <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{skill.name}</h4>
                            </motion.div>
                        </CinematicHover>
                    ))}
                </div>

            </div>
        </CinematicSection>
    );
}
