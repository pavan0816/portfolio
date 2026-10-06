"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const LOGOS = [
    { id: 1, name: "LOGO" },
    { id: 2, name: "LOGO" },
    { id: 3, name: "LOGO" },
    { id: 4, name: "LOGO" },
    { id: 5, name: "LOGO" },
    { id: 6, name: "LOGO" }
];

export default function ClientsSection() {
    return (
        <div className="w-full pt-8 pb-16 md:pt-12 md:pb-24">
            {/* ── SECTION HEADER ── */}
            <FadeUp className="mb-12">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-white/10 pb-8">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                            Our Clients
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.03em] text-white leading-[1.05]">
                            Trusted by <span className="text-zinc-600">ambitious teams.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-light">
                        We work with startups, growing businesses, and established companies to create digital experiences that move their business forward.
                    </p>
                </div>
            </FadeUp>

            {/* ── LOGO GRID ── */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16">
                {LOGOS.map((logo, i) => (
                    <FadeUp key={logo.id} delay={0.05 * i}>
                        <div className="group relative bg-[#050505] hover:bg-[#0A0A0A] transition-colors duration-700 h-32 md:h-40 flex items-center justify-center p-8">
                            <div className="text-2xl font-display font-bold text-white/20 group-hover:text-white/50 transition-colors duration-500 tracking-[0.3em] uppercase">
                                {logo.name}
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>

            {/* ── FINAL CTA ── */}
            <FadeUp delay={0.1}>
                <div className="flex flex-col items-center justify-center text-center p-12 md:p-16 rounded-[2rem] border border-white/10 bg-[#080808] relative overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-500">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-white tracking-[-0.02em] mb-4 relative z-10">
                        Your business could be next.
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-8 font-light relative z-10">
                        Have a project in mind? Let's build something meaningful together.
                    </p>
                    <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-transform duration-300 group-hover:scale-105 relative z-10">
                        START A PROJECT <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </FadeUp>
        </div>
    );
}
