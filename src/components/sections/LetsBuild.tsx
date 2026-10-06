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

export default function LetsBuild() {
    return (
        <section id="lets-build" className="relative bg-[#050505] py-32 md:py-48 overflow-hidden border-t border-white/5">
            {/* Background grid texture */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full blur-[150px] opacity-[0.08] bg-indigo-500" />
            </div>

            <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
                
                <FadeUp>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                        Let's Build
                    </span>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-medium tracking-[-0.03em] text-white leading-[1.05] mb-8">
                        Have an idea <br className="hidden md:block" />
                        <span className="text-zinc-600">worth building?</span>
                    </h2>
                </FadeUp>

                <FadeUp delay={0.2}>
                    <div className="flex flex-col items-center gap-4 mb-16">
                        <p className="text-white text-lg md:text-2xl font-light tracking-wide max-w-2xl">
                            Let's turn your idea into something real.
                        </p>
                        <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light max-w-xl">
                            Whether you're starting something new or improving what already exists, we'd love to hear about it.
                        </p>
                    </div>
                </FadeUp>

                <FadeUp delay={0.3}>
                    <div className="flex flex-col items-center gap-8">
                        <button className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-white text-black text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all duration-300 hover:scale-105">
                            START A PROJECT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <div className="flex items-center gap-2 text-zinc-500 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available for new projects.
                        </div>
                    </div>
                </FadeUp>

            </div>
        </section>
    );
}
