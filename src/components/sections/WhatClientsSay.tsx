"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

const PRINCIPLES = [
    {
        num: "01",
        title: "Transparency First",
        desc: "Every project starts with clear scope, timeline, and pricing. No hidden costs, no scope surprises. You always know where your project stands.",
    },
    {
        num: "02",
        title: "Your Vision, Our Execution",
        desc: "We listen before we build. Every decision is rooted in your business goals, not our assumptions. Regular check-ins ensure alignment at every stage.",
    },
    {
        num: "03",
        title: "Quality Over Speed",
        desc: "We don't cut corners to meet deadlines. Every line of code is reviewed, every design is tested, and every product is built to last.",
    },
    {
        num: "04",
        title: "Long-Term Partnership",
        desc: "We don't disappear after launch. Post-deployment support, performance monitoring, and iterative improvements are part of how we work.",
    },
];

export default function WhatClientsSay() {
    return (
        <section id="testimonials" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-[#1A2028]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                {/* ── SECTION HEADER ── */}
                <FadeUp className="mb-16 md:mb-24">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-[#1A2028] pb-8">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A2028] bg-transparent text-[#858F9C] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
                                How We Work
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.03em] text-[#F2F4F7] leading-[1.05]">
                                Built on principles, <span className="text-[#6B7280]">not promises.</span>
                            </h2>
                        </div>
                        <p className="text-[#858F9C] text-sm leading-relaxed max-w-xs font-light">
                            Our approach is designed around trust, clarity, and long-term value for every client we work with.
                        </p>
                    </div>
                </FadeUp>

                {/* ── PRINCIPLES GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {PRINCIPLES.map((principle, i) => (
                        <FadeUp key={principle.num} delay={i * 0.12} className="group">
                            <div className="relative">
                                {/* Hover glow */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-[50px] pointer-events-none" 
                                    style={{ backgroundColor: "#3B82F6" }} 
                                />
                                
                                <div className="relative p-8 md:p-10 rounded-2xl border border-[#1A2028] bg-[#0A0D12] overflow-hidden transition-all duration-500 group-hover:border-[#3B82F6] group-hover:bg-[#0B1626] h-full">
                                    {/* Number & Arrow */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="text-4xl md:text-5xl font-display font-bold text-[#1A2028] transition-colors duration-500 group-hover:text-[#3B82F6]/40">
                                            {principle.num}
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-[#1A2028] flex items-center justify-center bg-transparent transition-all duration-500 group-hover:border-[#3B82F6] group-hover:bg-[#3B82F6]/10">
                                            <ArrowUpRight className="w-4 h-4 text-[#858F9C] group-hover:text-[#60A5FA] transition-all duration-500" />
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className="text-xl md:text-2xl font-display font-semibold text-[#F2F4F7] tracking-[-0.01em] mb-3 transition-colors duration-500 group-hover:text-white">
                                        {principle.title}
                                    </h3>
                                    <p className="text-[#858F9C] text-sm md:text-base leading-relaxed font-light transition-colors duration-500 group-hover:text-[#9CA3AF]">
                                        {principle.desc}
                                    </p>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
