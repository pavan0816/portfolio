"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate, useScroll } from "framer-motion";
import { TrendingUp, Users, Code2, Globe, Star, Award } from "lucide-react";
import ClientsSection from "./ClientsSection";

/* ─────────────────────────────────────────
   FADE-UP HELPER (shared pattern)
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

/* ─────────────────────────────────────────
   ANIMATED COUNTER
──────────────────────────────────────────── */
function AnimatedCounter({
    to,
    suffix = "",
    prefix = "",
    duration = 2,
}: {
    to: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const count = useMotionValue(0);
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(count, to, {
            duration,
            ease: "easeOut",
            onUpdate(v) {
                setDisplay(Math.round(v).toString());
            },
        });
        return controls.stop;
    }, [isInView, to, duration, count]);

    return (
        <span ref={ref}>
            {prefix}
            {display}
            {suffix}
        </span>
    );
}

/* ─────────────────────────────────────────
   METRICS DATA
──────────────────────────────────────────── */
const METRICS = [
    {
        value: 3,
        suffix: "+",
        label: "Years in Business",
        sub: "Delivering since 2021",
        icon: TrendingUp,
        accent: "#4F46E5",
    },
    {
        value: 60,
        suffix: "+",
        label: "Projects Delivered",
        sub: "Across 12+ industries",
        icon: Code2,
        accent: "#7C3AED",
    },
    {
        value: 98,
        suffix: "%",
        label: "Client Satisfaction",
        sub: "Based on post-project surveys",
        icon: Star,
        accent: "#F59E0B",
    },
    {
        value: 15,
        suffix: "+",
        label: "Countries Reached",
        sub: "Global delivery, local precision",
        icon: Globe,
        accent: "#10B981",
    },
    {
        value: 40,
        suffix: "+",
        label: "Enterprise Clients",
        sub: "Trusted by SMEs & scale-ups",
        icon: Users,
        accent: "#0891B2",
    },
    {
        value: 8,
        suffix: "",
        label: "Industry Awards",
        sub: "Recognized for design & tech excellence",
        icon: Award,
        accent: "#E11D48",
    },
];

/* ─────────────────────────────────────────
   TIMELINE DATA
──────────────────────────────────────────── */
const MILESTONES = [
    {
        year: "2021",
        quarter: "Q2",
        title: "Studio Founded",
        description:
            "InfusionX is established with a small team of 4 co-founders sharing one vision: make enterprise-quality tech accessible to growth-stage companies.",
    },
    {
        year: "2021",
        quarter: "Q4",
        title: "First Enterprise Client",
        description:
            "Landed first enterprise contract — a full-stack e-commerce platform for a 200+ SKU retail brand, delivered in 6 weeks.",
    },
    {
        year: "2022",
        quarter: "Q2",
        title: "Mobile Division Launched",
        description:
            "Expanded service offering to include native iOS and Android development. Shipped 3 apps in the first quarter of operation.",
    },
    {
        year: "2022",
        quarter: "Q4",
        title: "AI Practice Established",
        description:
            "Pioneered a dedicated AI solutions practice, integrating LLMs, automation, and predictive analytics into client workflows.",
    },
    {
        year: "2023",
        quarter: "Q2",
        title: "International Reach",
        description:
            "Expanded client base to the Middle East and Southeast Asia, serving clients across 12+ countries with localized delivery teams.",
    },
    {
        year: "2024",
        quarter: "Q1",
        title: "60+ Projects & Counting",
        description:
            "Crossed the 60-project milestone. Refreshed the brand and launched InfusionX 2.0 — a modular growth system built for the next decade.",
    },
];

function TimelineItem({ m, isRight }: { m: typeof MILESTONES[0], isRight: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    return (
        <div ref={ref} className={`relative flex items-start gap-6 md:gap-0 pb-24 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Content card */}
            <div className={`flex-1 ml-12 md:ml-0 relative z-10 ${isRight ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"}`}>
                <div className={`group relative inline-flex flex-col gap-3 p-2 transition-all duration-700 text-left ${isRight ? "md:items-end" : "md:items-start"}`}>
                    
                    {/* Subtle blue light behind active item */}
                    <div
                        className={`absolute inset-0 -z-10 transition-opacity duration-1000 blur-3xl pointer-events-none ${isInView ? "opacity-15" : "opacity-0"}`}
                        style={{ background: "radial-gradient(circle at center, #3B82F6 0%, transparent 70%)" }}
                    />
                    
                    {/* Year + quarter */}
                    <div className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-700 ${isInView ? "text-[#3B82F6]" : "text-[#1A2028]"}`}>
                        {m.year} // {m.quarter}
                    </div>

                    {/* Title */}
                    <h4 className={`text-xl md:text-2xl font-display font-medium tracking-[-0.01em] transition-colors duration-700 ${isInView ? "text-[#F2F4F7]" : "text-[#252C35]"}`}>
                        {m.title}
                    </h4>

                    {/* Description */}
                    <p className={`text-[15px] leading-relaxed font-light max-w-md transition-colors duration-700 ${isInView ? "text-[#858F9C]" : "text-[#252C35]"}`}>
                        {m.description}
                    </p>
                </div>
            </div>

            {/* Timeline dot — mobile (absolute) */}
            <div
                className={`absolute left-0 top-4 md:hidden w-10 h-10 rounded-full border bg-[#050505] flex items-center justify-center shrink-0 transition-colors duration-700 ${isInView ? "border-[#3B82F6]/30" : "border-[#1A2028]"}`}
            >
                <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ${isInView ? "bg-[#3B82F6]" : "bg-[#252C35]"}`}
                    style={{ boxShadow: isInView ? `0 0 12px #60A5FA` : "none" }}
                />
            </div>

            {/* Timeline dot — desktop (center) */}
            <div className={`hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 w-10 h-10 rounded-full border bg-[#050505] items-center justify-center z-10 shrink-0 transition-colors duration-700 ${isInView ? "border-[#3B82F6]/30" : "border-[#1A2028]"}`}>
                <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ${isInView ? "bg-[#3B82F6]" : "bg-[#252C35]"}`}
                    style={{ boxShadow: isInView ? `0 0 12px #60A5FA` : "none" }}
                />
            </div>

            {/* Empty flex half on desktop */}
            <div className="hidden md:block flex-1" />
        </div>
    );
}

/* ─────────────────────────────────────────
   MAIN SECTION
──────────────────────────────────────────── */
export default function Experience() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"],
    });

    return (
        <section
            id="experience"
            className="relative bg-[#050505] overflow-hidden py-24"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* ── SECTION HEADER ── */}
                <FadeUp className="mb-16">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-[#1A2028] pb-8">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A2028] bg-transparent text-[#858F9C] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
                                Our Track Record
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.03em] text-[#F2F4F7] leading-[1.05]">
                                Built on{" "}
                                <span className="text-[#858F9C]">Results.</span>
                            </h2>
                        </div>
                        <p className="text-[#858F9C] text-sm leading-relaxed max-w-xs font-light">
                            Three years of compounding expertise, strategic partnerships, and
                            measurable client outcomes.
                        </p>
                    </div>
                </FadeUp>

                {/* ── METRICS GRID ── */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1A2028] rounded-2xl overflow-hidden mb-24 relative z-10">
                    {METRICS.map((metric, i) => {
                        const Icon = metric.icon;
                        return (
                            <FadeUp key={metric.label} delay={0.08 * i} className="bg-[#050505]">
                                <div className="group relative bg-[#090C10] transition-colors duration-700 p-8 md:p-10 flex flex-col gap-4 border border-transparent hover:border-[#3B82F6]/50">
                                    <div className="flex items-center justify-between relative z-10">
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#1A2028] bg-[#050505] transition-colors duration-500 group-hover:border-[#3B82F6]/30"
                                        >
                                            <Icon
                                                className="w-4 h-4 text-[#858F9C] group-hover:text-[#60A5FA] transition-colors duration-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative z-10 mt-4">
                                        <div
                                            className="text-4xl md:text-5xl font-display font-bold tracking-[-0.04em] leading-none mb-1 text-[#F2F4F7]"
                                        >
                                            <AnimatedCounter
                                                to={metric.value}
                                                suffix={metric.suffix}
                                                duration={2.2}
                                            />
                                        </div>
                                        <div className="text-[#AAB3BF] text-sm font-medium tracking-wide mt-3">
                                            {metric.label}
                                        </div>
                                        <div className="text-[#858F9C] text-xs mt-1 font-light">
                                            {metric.sub}
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        );
                    })}
                </div>

                {/* ── CLIENTS / PARTNERS ── */}
                <ClientsSection />

                {/* ── TIMELINE ── */}
                <FadeUp delay={0.1} className="mt-32 mb-16">
                    <div className="flex items-center gap-6">
                        <h3 className="text-2xl md:text-3xl font-display font-medium tracking-[-0.02em] text-[#F2F4F7]">
                            Company Timeline
                        </h3>
                        <div className="flex-1 h-px bg-[#1A2028]" />
                        <span className="text-xs tracking-[0.2em] uppercase text-[#858F9C] font-semibold">
                            2021 — Present
                        </span>
                    </div>
                </FadeUp>

                <div className="relative" ref={timelineRef}>
                    {/* Vertical line — Inactive */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#1A2028] md:-translate-x-1/2 rounded-full" />

                    {/* Vertical line — Active (Scroll linked) */}
                    <motion.div 
                        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                        className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#3B82F6] md:-translate-x-1/2 rounded-full shadow-[0_0_10px_#3B82F6]"
                    />

                    <div className="space-y-0 relative z-10 pt-4 pb-10">
                        {MILESTONES.map((m, i) => (
                            <TimelineItem key={`${m.year}-${m.quarter}`} m={m} isRight={i % 2 === 0} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
