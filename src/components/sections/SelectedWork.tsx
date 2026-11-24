"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

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

export default function SelectedWork() {
    return (
        <section id="selected-work" className="relative bg-[#050505] py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                {/* ── SECTION HEADER ── */}
                <FadeUp className="mb-16 md:mb-24">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-[#1A2028] pb-8">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A2028] bg-transparent text-[#858F9C] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
                                Selected Work
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.03em] text-[#F2F4F7] leading-[1.05] max-w-2xl">
                                Digital products built for <span className="text-[#6B7280]">ambitious businesses.</span>
                            </h2>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
                            <p className="text-[#858F9C] text-sm leading-relaxed max-w-xs font-light text-left md:text-right">
                                From websites to custom digital platforms, we design and build products that solve real business problems.
                            </p>
                            <button className="group inline-flex items-center gap-2 text-[#F2F4F7] text-[10px] font-bold tracking-[0.25em] uppercase hover:text-[#3B82F6] transition-colors">
                                VIEW ALL PROJECTS 
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </FadeUp>

                {/* ── PROJECTS GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {portfolioData.projects.map((project, i) => {
                        const isFeatured = i === 0;
                        const gradients = ["from-[#111] to-[#0A0A0A]", "from-[#121212] to-[#080808]", "from-[#131313] to-[#050505]", "from-[#141414] to-[#060606]"];
                        const gradient = gradients[i % gradients.length];
                        const accents = ["group-hover:text-[#60A5FA]", "group-hover:text-emerald-400", "group-hover:text-amber-400", "group-hover:text-[#60A5FA]"];
                        const accent = accents[i % accents.length];
                        const bgAccents = ["group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6]", "group-hover:bg-emerald-500 group-hover:border-emerald-500", "group-hover:bg-amber-500 group-hover:border-amber-500", "group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6]"];
                        const bgAccent = bgAccents[i % bgAccents.length];

                        return (
                        <FadeUp 
                            key={project.id} 
                            delay={i * 0.15} 
                            className={`group cursor-pointer block rounded-[2rem] border border-[#1A2028] bg-[#070707] overflow-hidden hover:border-[#3B82F6]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 ${isFeatured ? "md:col-span-2" : "md:col-span-1"}`}
                        >
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={`flex flex-col h-full ${isFeatured ? "md:flex-row" : ""}`}>
                                {/* Image */}
                                <div className={`relative overflow-hidden border-[#1A2028] bg-[#0A0A0A] ${isFeatured ? "h-[300px] md:h-[450px] w-full md:w-3/5 border-b md:border-b-0 md:border-r" : "h-[280px] md:h-[380px] w-full border-b"}`}>
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] opacity-30 group-hover:opacity-50 z-0`} />
                                    
                                    {project.demoUrl && project.demoUrl !== '#' && project.allowIframe !== false ? (
                                        <div className="absolute inset-0 z-10 overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                            <iframe 
                                                src={project.demoUrl} 
                                                title={project.title}
                                                className="w-[150%] h-[150%] border-0 origin-top-left scale-[0.67]"
                                                loading="lazy"
                                                sandbox="allow-scripts allow-same-origin"
                                            />
                                        </div>
                                    ) : project.image ? (
                                        <div className="absolute inset-0 z-10 p-4 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                                            <Image src={project.image} alt={project.title} width={800} height={600} className="w-full h-full object-cover rounded-xl" />
                                        </div>
                                    ) : null}
                                </div>
                                
                                {/* Content */}
                                <div className={`p-8 md:p-12 flex flex-col relative z-20 ${isFeatured ? "w-full md:w-2/5 justify-center" : "flex-1"}`}>
                                    <div className="text-[10px] font-bold tracking-[0.3em] text-[#858F9C] uppercase mb-4 flex items-center gap-2">
                                        <span className="text-[#F2F4F7]/40">{project.id}</span>
                                        <span className="w-4 h-px bg-[#1A2028]" />
                                        {project.title}
                                    </div>
                                    
                                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-[#F2F4F7] tracking-[-0.02em] mb-4">
                                        {project.category}
                                    </h3>
                                    
                                    <p className="text-[#858F9C] text-sm leading-relaxed mb-12 font-light">
                                        {project.description}
                                    </p>
                                    
                                    <div className="mt-auto flex items-center justify-between pt-4">
                                        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase text-[#F2F4F7] transition-colors duration-300 ${accent}`}>
                                            VIEW LIVE
                                        </span>
                                        <div className={`w-10 h-10 rounded-full border border-[#1A2028] flex items-center justify-center bg-[#0D1117] transition-all duration-300 ${bgAccent}`}>
                                            <ArrowUpRight className="w-4 h-4 text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </FadeUp>
                    );
                    })}
                </div>
            </div>
        </section>
    );
}
