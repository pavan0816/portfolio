"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Building, ShoppingBag, Box, Activity, Briefcase, Book } from "lucide-react";
import { CinematicSection } from "@/components/ui/CinematicSection";

const industries = [
    { name: "Healthcare & MedTech", icon: <Heart className="w-10 h-10" />, color: "text-rose-500", bg: "bg-rose-500/10", glow: "rgba(244, 63, 94, 0.3)", gradient: "from-rose-500/20 to-pink-500/20" },
    { name: "Finance & FinTech", icon: <Building className="w-10 h-10" />, color: "text-emerald-500", bg: "bg-emerald-500/10", glow: "rgba(16, 185, 129, 0.3)", gradient: "from-emerald-500/20 to-teal-500/20" },
    { name: "E-Commerce", icon: <ShoppingBag className="w-10 h-10" />, color: "text-amber-500", bg: "bg-amber-500/10", glow: "rgba(245, 158, 11, 0.3)", gradient: "from-amber-500/20 to-orange-500/20" },
    { name: "SaaS & Enterprise", icon: <Box className="w-10 h-10" />, color: "text-indigo-500", bg: "bg-indigo-500/10", glow: "rgba(99, 102, 241, 0.3)", gradient: "from-indigo-500/20 to-violet-500/20" },
    { name: "Education & EdTech", icon: <Book className="w-10 h-10" />, color: "text-sky-500", bg: "bg-sky-500/10", glow: "rgba(14, 165, 233, 0.3)", gradient: "from-sky-500/20 to-cyan-500/20" },
    { name: "Professional Services", icon: <Briefcase className="w-10 h-10" />, color: "text-slate-500", bg: "bg-slate-500/10", glow: "rgba(100, 116, 139, 0.3)", gradient: "from-slate-500/20 to-zinc-500/20" },
];

function IndustryCard({ ind, i }: { ind: typeof industries[0]; i: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: i * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 120,
                damping: 14,
            }}
            whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white dark:bg-black border border-zinc-100 dark:border-zinc-800 transition-all cursor-default group overflow-hidden"
            style={{
                boxShadow: isHovered ? `0 20px 40px -10px ${ind.glow}` : '0 1px 3px rgba(0,0,0,0.1)',
            }}
        >
            {/* Animated gradient background on hover */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${ind.gradient} rounded-3xl`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            />

            {/* Ripple effect on hover */}
            {isHovered && (
                <motion.div
                    className={`absolute inset-0 rounded-3xl pointer-events-none`}
                    initial={{ scale: 0, opacity: 0.3 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{
                        background: `radial-gradient(circle, ${ind.glow}, transparent 70%)`,
                    }}
                />
            )}

            {/* Animated border gradient */}
            <motion.div
                className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `linear-gradient(135deg, ${ind.glow}, transparent, ${ind.glow})`,
                    backgroundSize: "200% 200%",
                }}
                animate={isHovered ? { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative z-10">
                <motion.div
                    className={`p-5 rounded-2xl ${ind.bg} ${ind.color} mb-4 mx-auto`}
                    animate={isHovered ? {
                        scale: [1, 1.15, 1.1],
                        rotate: [0, -5, 5, 0],
                    } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Continuous floating animation */}
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {ind.icon}
                    </motion.div>
                </motion.div>
                <h3 className="font-bold text-foreground text-center text-sm md:text-base relative z-10">{ind.name}</h3>
            </div>
        </motion.div>
    );
}

export default function IndustriesSection() {
    return (
        <CinematicSection parallaxOffset={30} className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden z-20">
            {/* Animated background gradient */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 blur-[100px]"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-500/5 blur-[100px]"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                        {"Industries We Serve".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                className="inline-block mr-[0.3em]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Our intelligent solutions are adaptable across multiple sectors, transforming operations and user experiences globally.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
                    {industries.map((ind, i) => (
                        <IndustryCard key={i} ind={ind} i={i} />
                    ))}
                </div>
            </div>
        </CinematicSection>
    );
}
