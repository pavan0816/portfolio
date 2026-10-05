"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "InfusionX completely transformed our operational workflow. Their AI integration reduced our manual data processing time by 80%.",
        name: "Sarah Jenkins",
        title: "CTO, FinTech Innovators (Sample)",
        company: "FinTech Innovators",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        quote: "The web application they delivered was flawless. It scaled effortlessly during our biggest product launch without a single hiccup.",
        name: "David Chen",
        title: "Founder, ScaleUp SaaS (Sample)",
        company: "ScaleUp SaaS",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        quote: "Their team's expertise in AI Voice Agents gave our healthcare startup the competitive edge we needed in patient triaging.",
        name: "Dr. Emily Roberts",
        title: "Operations Director, MedCare (Sample)",
        company: "MedCare",
        gradient: "from-emerald-500 to-teal-500",
    }
];

function TestimonialCard({ test, index }: { test: typeof testimonials[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
                y: -6,
                transition: { duration: 0.3 },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-white dark:bg-black p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative group overflow-hidden transition-all duration-500"
            style={{
                boxShadow: isHovered ? '0 25px 50px -12px rgba(0,0,0,0.15)' : '',
            }}
        >
            {/* Aurora background effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                    background: "radial-gradient(ellipse at 30% 20%, rgba(168, 85, 247, 0.04), transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.04), transparent 50%)",
                }}
            />

            {/* Animated gradient border */}
            <motion.div
                className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-[1]"
                style={{
                    background: "linear-gradient(135deg, rgba(168, 85, 247, 0.3), transparent, rgba(59, 130, 246, 0.3))",
                    backgroundSize: "200% 200%",
                }}
                animate={isHovered ? { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Quote icon with animation */}
            <motion.div
                className="absolute top-8 right-8"
                animate={isHovered ? {
                    rotate: [0, -10, 10, 0],
                    y: [0, -3, 0],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Quote className="w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />
            </motion.div>

            <p className="text-lg text-foreground font-medium leading-relaxed mb-8 relative z-10 pt-4">
                &ldquo;{test.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4 relative z-10">
                {/* Avatar with animated gradient ring */}
                <div className="relative">
                    <motion.div
                        className={`absolute -inset-[2px] rounded-full bg-gradient-to-r ${test.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        animate={isHovered ? { rotate: [0, 360] } : {}}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-lg border-2 border-background">
                        {test.name.charAt(0)}
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-foreground">{test.name}</h4>
                    <p className="text-sm text-muted-foreground">{test.title}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function TestimonialsSection() {
    return (
        <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
            {/* Animated aurora blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[100px]"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-black tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Trusted by Visionaries
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test, i) => (
                        <TestimonialCard key={i} test={test} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
