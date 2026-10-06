"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

/* ─────────────────────────────────────────
   FADE-UP HELPER
──────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string; }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

const TESTIMONIALS = [
    {
        id: 1,
        quote: "[Client testimonial goes here]",
        name: "[Client Name]",
        role: "[Role • Company]",
    },
    {
        id: 2,
        quote: "[Client testimonial goes here]",
        name: "[Client Name]",
        role: "[Role • Company]",
    },
    {
        id: 3,
        quote: "[Client testimonial goes here]",
        name: "[Client Name]",
        role: "[Role • Company]",
    }
];

export default function WhatClientsSay() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    };

    const current = TESTIMONIALS[currentIndex];

    return (
        <section id="testimonials" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
                {/* ── SECTION HEADER ── */}
                <FadeUp className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-white/10 pb-8">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
                            What Clients Say
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.03em] text-white leading-[1.05]">
                            Real people. <span className="text-zinc-600">Real experiences.</span>
                        </h2>
                    </div>
                </FadeUp>

                {/* ── TESTIMONIAL CAROUSEL ── */}
                <FadeUp delay={0.1}>
                    <div className="relative border border-white/10 rounded-[2rem] bg-[#0A0A0A] p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl">
                        {/* Background Quote Icon */}
                        <Quote className="absolute top-8 right-8 md:top-16 md:right-16 w-24 h-24 md:w-48 md:h-48 text-white/[0.02] rotate-12" />

                        <div className="min-h-[250px] md:min-h-[300px] flex flex-col relative z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col flex-1"
                                >
                                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-medium text-white leading-[1.3] md:leading-[1.4] tracking-tight mb-12 md:mb-16">
                                        “{current.quote}”
                                    </h3>
                                    
                                    <div className="mt-auto">
                                        <div className="text-lg md:text-xl font-bold text-white mb-2">
                                            {current.name}
                                        </div>
                                        <div className="text-sm md:text-base text-zinc-500 tracking-wide font-light">
                                            {current.role}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* ── NAVIGATION ── */}
                    <div className="flex items-center justify-between mt-8 px-4 md:px-8">
                        <div className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase">
                            0{currentIndex + 1} / 0{TESTIMONIALS.length}
                        </div>
                        <div className="flex items-center gap-4 md:gap-8">
                            <button 
                                onClick={handlePrev}
                                className="group flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-white uppercase hover:text-zinc-400 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="hidden md:inline">Previous</span>
                            </button>
                            <span className="w-px h-4 bg-white/10" />
                            <button 
                                onClick={handleNext}
                                className="group flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-white uppercase hover:text-zinc-400 transition-colors"
                            >
                                <span className="hidden md:inline">Next</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
