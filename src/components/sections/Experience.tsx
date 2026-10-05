"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { TrendingUp, Users, Code2, Globe, Star, Award } from "lucide-react";

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
        tag: "Origins",
        tagColor: "#4F46E5",
    },
    {
        year: "2021",
        quarter: "Q4",
        title: "First Enterprise Client",
        description:
            "Landed first enterprise contract — a full-stack e-commerce platform for a 200+ SKU retail brand, delivered in 6 weeks.",
        tag: "Milestone",
        tagColor: "#7C3AED",
    },
    {
        year: "2022",
        quarter: "Q2",
        title: "Mobile Division Launched",
        description:
            "Expanded service offering to include native iOS and Android development. Shipped 3 apps in the first quarter of operation.",
        tag: "Expansion",
        tagColor: "#0891B2",
    },
    {
        year: "2022",
        quarter: "Q4",
        title: "AI Practice Established",
        description:
            "Pioneered a dedicated AI solutions practice, integrating LLMs, automation, and predictive analytics into client workflows.",
        tag: "Innovation",
        tagColor: "#10B981",
    },
    {
        year: "2023",
        quarter: "Q2",
        title: "International Reach",
        description:
            "Expanded client base to the Middle East and Southeast Asia, serving clients across 12+ countries with localized delivery teams.",
        tag: "Global",
        tagColor: "#F59E0B",
    },
    {
        year: "2024",
        quarter: "Q1",
        title: "60+ Projects & Counting",
        description:
            "Crossed the 60-project milestone. Refreshed the brand and launched InfusionX 2.0 — a modular growth system built for the next decade.",
        tag: "Today",
        tagColor: "#E11D48",
    },
];

/* ─────────────────────────────────────────
   MAIN SECTION
──────────────────────────────────────────── */
export default function Experience() {
    return (
        <section
            id="experience"
            className="relative bg-[#050505] overflow-hidden py-20"
        >
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

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* ── SECTION HEADER ── */}
                <FadeUp className="mb-12">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-white/10 pb-8">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
                                Our Track Record
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.03em] text-white leading-[1.05]">
                                Built on{" "}
                                <span className="text-zinc-600">Results.</span>
                            </h2>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-light">
                            Three years of compounding expertise, strategic partnerships, and
                            measurable client outcomes.
                        </p>
                    </div>
                </FadeUp>

                {/* ── METRICS GRID ── */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16">
                    {METRICS.map((metric, i) => {
                        const Icon = metric.icon;
                        return (
                            <FadeUp key={metric.label} delay={0.08 * i}>
                                <div className="group relative bg-[#050505] hover:bg-[#0A0A0A] transition-colors duration-700 p-8 md:p-10 flex flex-col gap-4">
                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(circle at bottom right, ${metric.accent}18 0%, transparent 65%)`,
                                        }}
                                    />

                                    <div className="flex items-center justify-between relative z-10">
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center"
                                            style={{ background: `${metric.accent}20` }}
                                        >
                                            <Icon
                                                className="w-4 h-4"
                                                style={{ color: metric.accent }}
                                            />
                                        </div>
                                        {/* Decorative corner dot */}
                                        <div
                                            className="w-1.5 h-1.5 rounded-full opacity-40"
                                            style={{ background: metric.accent }}
                                        />
                                    </div>

                                    <div className="relative z-10">
                                        <div
                                            className="text-4xl md:text-5xl font-display font-bold tracking-[-0.04em] leading-none mb-1"
                                            style={{ color: metric.accent }}
                                        >
                                            <AnimatedCounter
                                                to={metric.value}
                                                suffix={metric.suffix}
                                                duration={2.2}
                                            />
                                        </div>
                                        <div className="text-white text-sm font-semibold tracking-wide mt-2">
                                            {metric.label}
                                        </div>
                                        <div className="text-zinc-600 text-xs mt-1 font-light">
                                            {metric.sub}
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        );
                    })}
                </div>

                {/* ── TIMELINE ── */}
                <FadeUp delay={0.1} className="mb-10">
                    <div className="flex items-center gap-4">
                        <h3 className="text-2xl md:text-3xl font-display font-medium tracking-[-0.02em] text-white">
                            Company Timeline
                        </h3>
                        <div className="flex-1 h-px bg-white/5" />
                        <span className="text-xs tracking-[0.2em] uppercase text-zinc-600 font-semibold">
                            2021 — Present
                        </span>
                    </div>
                </FadeUp>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />

                    <div className="space-y-0">
                        {MILESTONES.map((m, i) => {
                            const isRight = i % 2 === 0;
                            return (
                                <FadeUp key={`${m.year}-${m.quarter}`} delay={0.06 * i}>
                                    <div
                                        className={`relative flex items-start gap-6 md:gap-0 pb-12 ${
                                            isRight
                                                ? "md:flex-row"
                                                : "md:flex-row-reverse"
                                        }`}
                                    >
                                        {/* Content card */}
                                        <div
                                            className={`flex-1 ml-12 md:ml-0 ${
                                                isRight
                                                    ? "md:pr-16 md:text-right"
                                                    : "md:pl-16 md:text-left"
                                            }`}
                                        >
                                            <div
                                                className={`group inline-flex flex-col gap-3 bg-[#080808] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 hover:bg-[#0d0d0d] transition-all duration-700 text-left ${
                                                    isRight ? "md:items-end" : "md:items-start"
                                                }`}
                                            >
                                                {/* Tag */}
                                                <span
                                                    className="text-[9px] font-bold tracking-[0.35em] uppercase px-3 py-1 rounded-full"
                                                    style={{
                                                        color: m.tagColor,
                                                        background: `${m.tagColor}18`,
                                                    }}
                                                >
                                                    {m.tag}
                                                </span>

                                                {/* Year + quarter */}
                                                <div className="text-xs font-semibold tracking-[0.2em] text-zinc-600 uppercase">
                                                    {m.year} · {m.quarter}
                                                </div>

                                                {/* Title */}
                                                <h4 className="text-lg md:text-xl font-display font-semibold text-white tracking-[-0.01em]">
                                                    {m.title}
                                                </h4>

                                                {/* Description */}
                                                <p className="text-zinc-500 text-sm leading-relaxed font-light max-w-sm">
                                                    {m.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Timeline dot — mobile (absolute) */}
                                        <div
                                            className="absolute left-0 top-6 md:hidden w-10 h-10 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center shrink-0"
                                            style={{ boxShadow: `0 0 16px ${m.tagColor}30` }}
                                        >
                                            <div
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{ background: m.tagColor }}
                                            />
                                        </div>

                                        {/* Timeline dot — desktop (center) */}
                                        <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-10 h-10 rounded-full border border-white/10 bg-[#050505] items-center justify-center z-10 shrink-0">
                                            <div
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{
                                                    background: m.tagColor,
                                                    boxShadow: `0 0 12px ${m.tagColor}`,
                                                }}
                                            />
                                        </div>

                                        {/* Empty flex half on desktop */}
                                        <div className="hidden md:block flex-1" />
                                    </div>
                                </FadeUp>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
