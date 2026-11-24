"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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

const CLIENT_PARTNERS = [
    {
        name: "Cá Phê Bistro",
        category: "Hospitality & Retail",
        domain: "caphebistro.in",
        desc: "Artisan Vietnamese bistro in Financial District, Hyderabad"
    },
    {
        name: "AI Nestham",
        category: "EdTech AI Platform",
        domain: "ainestham.com",
        desc: "AI curriculum deployed across 25+ schools & 4,000+ students"
    },
    {
        name: "Kathuv",
        category: "Creative Agency",
        domain: "kathuv.com",
        desc: "Digital media & culture-driven brand storytelling"
    },
    {
        name: "Green Tree Therapies",
        category: "Healthcare SaaS",
        domain: "greentreetherapiescdc.com",
        desc: "Clinic ERP & child development center management system"
    }
];

export default function ClientsSection() {
    return (
        <div className="w-full pt-8 pb-16 md:pt-12 md:pb-24">
            {/* ── SECTION HEADER ── */}
            <FadeUp className="mb-12">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-[#1A2028] pb-8">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A2028] bg-transparent text-[#858F9C] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
                            Client Collaborations
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.03em] text-[#F2F4F7] leading-[1.05]">
                            Trusted by <span className="text-[#6B7280]">ambitious brands.</span>
                        </h2>
                    </div>
                    <p className="text-[#858F9C] text-sm leading-relaxed max-w-xs font-light">
                        From innovative regional startups to scaling specialized platforms, we engineer solutions that generate tangible business value.
                    </p>
                </div>
            </FadeUp>

            {/* ── CLIENT CARDS GRID ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                {CLIENT_PARTNERS.map((client, i) => (
                    <FadeUp key={client.name} delay={0.08 * i}>
                        <div className="group relative bg-[#0A0D12] hover:bg-[#0D1117] border border-[#1A2028] hover:border-[#3B82F6]/40 rounded-2xl p-6 transition-all duration-500 h-full flex flex-col justify-between">
                            {/* Glow accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#3B82F6]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div>
                                <div className="text-[10px] font-mono tracking-widest uppercase text-[#3B82F6] mb-3">
                                    {client.category}
                                </div>
                                <h3 className="text-xl font-display font-semibold text-[#F2F4F7] group-hover:text-white transition-colors duration-300 mb-2">
                                    {client.name}
                                </h3>
                                <p className="text-xs text-[#858F9C] leading-relaxed font-light mb-4">
                                    {client.desc}
                                </p>
                            </div>

                            <div className="pt-3 border-t border-[#1A2028] flex items-center justify-between text-[11px] text-[#6B7280] group-hover:text-[#9CA3AF] transition-colors">
                                <span className="font-mono">{client.domain}</span>
                                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:text-[#3B82F6] transition-all" />
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>

            {/* ── CALLOUT ── */}
            <FadeUp delay={0.1}>
                <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-10 rounded-2xl border border-[#1A2028] bg-gradient-to-r from-[#0A0D12] via-[#0D1117] to-[#0A0D12] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[400px] h-full bg-[#3B82F6]/5 blur-3xl pointer-events-none" />
                    
                    <div className="mb-6 md:mb-0 relative z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#60A5FA] mb-2">
                            <Sparkles className="w-3.5 h-3.5" /> Ready to scale your product?
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-semibold text-[#F2F4F7] tracking-[-0.02em]">
                            Let's engineer your competitive advantage.
                        </h3>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-[#F2F4F7] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] relative z-10 shrink-0"
                    >
                        START A PROJECT <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </FadeUp>
        </div>
    );
}
