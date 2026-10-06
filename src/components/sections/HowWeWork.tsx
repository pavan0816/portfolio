"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────
   FADE-UP HELPER
──────────────────────────────────────────── */
function FadeUp({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
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

const STEPS = [
    { num: "01", title: "DISCOVER", desc: "We understand your business, users, challenges, and goals before we build." },
    { num: "02", title: "STRATEGIZE", desc: "We turn ideas into a clear product direction, structure, and execution plan." },
    { num: "03", title: "DESIGN", desc: "We create intuitive interfaces and experiences that are simple to use and built around your users." },
    { num: "04", title: "BUILD", desc: "Our team develops reliable, scalable technology with performance and quality in mind." },
    { num: "05", title: "LAUNCH", desc: "We launch, measure, refine, and help your product continue to grow." }
];

export default function HowWeWork() {
    return (
        <section id="how-we-work" className="relative bg-[#0A0A0A] py-24 overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                {/* ── SECTION HEADER ── */}
                <FadeUp className="mb-20 md:mb-32">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-white/10 pb-8">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                                How We Work
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.03em] text-white leading-[1.05]">
                                From idea to <span className="text-zinc-600">impact.</span>
                            </h2>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-light">
                            A clear process keeps every project focused, purposeful, and built for the real world.
                        </p>
                    </div>
                </FadeUp>

                {/* ── STEPS ── */}
                <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-8">
                    {/* Desktop Horizontal Line */}
                    <div className="hidden md:block absolute top-[11px] left-0 right-0 h-px bg-white/10" />
                    {/* Mobile Vertical Line */}
                    <div className="absolute top-0 bottom-0 left-[11px] w-px bg-white/10 md:hidden" />

                    {STEPS.map((step, i) => (
                        <FadeUp key={step.num} delay={i * 0.15} className="relative flex-1 group">
                            {/* The Dot */}
                            <div className="absolute left-[7px] top-[7px] md:left-0 md:top-[7px] w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-indigo-400 transition-colors duration-500 z-10 ring-4 ring-[#0A0A0A]" />
                            
                            {/* Content Container */}
                            <div className="pl-12 md:pl-0 md:pt-14 relative">
                                {/* Large Subtle Number */}
                                <div className="text-5xl md:text-6xl font-display font-bold text-white/5 mb-6 group-hover:text-white/10 transition-colors duration-500">
                                    {step.num}
                                </div>
                                {/* Step Title */}
                                <h3 className="text-lg font-display font-semibold text-white tracking-wide mb-3 flex items-center gap-2">
                                    {step.title}
                                </h3>
                                {/* Description */}
                                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                                    {step.desc}
                                </p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
