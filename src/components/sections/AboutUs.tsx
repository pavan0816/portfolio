"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Eye, Target, ArrowUpRight } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   FADE-UP ANIMATION HELPER
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
   PILLARS DATA
──────────────────────────────────────────── */
const PILLARS = [
    {
        icon: Zap,
        label: "Our Mission",
        headline: "Engineer Growth,\nNot Just Products.",
        body: "We exist to close the gap between visionary ideas and market-ready execution. InfusionX partners with startups and enterprises to design, build, and scale digital products that create measurable, compounding business value — from day one.",
        accent: "#4F46E5",
    },
    {
        icon: Eye,
        label: "Our Vision",
        headline: "A World Where\nTech Levels the Field.",
        body: "We believe world-class technology should not be the exclusive privilege of the Fortune 500. Our vision is to become the most trusted growth partner for ambitious businesses, delivering enterprise-grade solutions at the speed and cost that early-stage companies need.",
        accent: "#7C3AED",
    },
    {
        icon: Target,
        label: "Our Philosophy",
        headline: "Systems Over\nSingle Solutions.",
        body: "Every engagement is designed as an interconnected system — not a one-off deliverable. We architect intelligent stacks that talk to each other: your website, your mobile app, your automation, your data. The result is compounding momentum, not isolated wins.",
        accent: "#0891B2",
    },
];

/* ─────────────────────────────────────────
   MARQUEE TICKER
──────────────────────────────────────────── */
const TICKER_ITEMS = [
    "MISSION-DRIVEN DESIGN",
    "SCALABLE ARCHITECTURE",
    "HUMAN-CENTERED UX",
    "AI-POWERED AUTOMATION",
    "FULL-STACK EXECUTION",
    "REVENUE-FOCUSED BUILDS",
];

function Ticker() {
    const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS];
    return (
        <div className="relative overflow-hidden py-5 border-y border-white/5">
            <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
                {repeated.map((item, i) => (
                    <span
                        key={i}
                        className="text-xs font-semibold tracking-[0.3em] uppercase text-white/20 flex items-center gap-6"
                    >
                        {item}
                        <span className="inline-block w-1 h-1 rounded-full bg-white/20" />
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

/* ─────────────────────────────────────────
   MAIN SECTION
──────────────────────────────────────────── */
export default function AboutUs() {
    return (
        <section
            id="about-us"
            className="relative bg-[#000000] overflow-hidden py-20"
        >
            {/* Subtle background gradient orb */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-[160px] opacity-10"
                style={{
                    background:
                        "radial-gradient(ellipse, #4F46E5 0%, #7C3AED 40%, transparent 70%)",
                }}
            />

            {/* ── SECTION HEADER ── */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <FadeUp className="mb-12">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-white/10 pb-8">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                                Who We Are
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.03em] text-white leading-[1.05]">
                                Built for Bold{" "}
                                <span className="text-zinc-600">Builders.</span>
                            </h2>
                        </div>
                        <Link
                            href="#contact"
                            className="group shrink-0 flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-500"
                        >
                            Work With Us
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                        </Link>
                    </div>
                </FadeUp>

                {/* ── OPENING STATEMENT ── */}
                <FadeUp delay={0.1}>
                    <p className="text-2xl md:text-3xl font-light text-zinc-400 leading-[1.4] max-w-4xl mb-14 tracking-[-0.01em]">
                        InfusionX is a{" "}
                        <em className="not-italic text-white font-medium">
                            full-service digital growth studio
                        </em>{" "}
                        — turning complex problems into elegant, scalable products
                        that customers love and investors notice.
                    </p>
                </FadeUp>

                {/* ── PILLARS GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-14">
                    {PILLARS.map((pillar, i) => {
                        const Icon = pillar.icon;
                        return (
                            <FadeUp key={pillar.label} delay={0.1 + i * 0.12}>
                                <div className="group relative bg-[#050505] p-10 md:p-12 h-full flex flex-col gap-6 hover:bg-[#0A0A0A] transition-colors duration-700">
                                    {/* Accent glow on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(circle at top left, ${pillar.accent}14 0%, transparent 60%)`,
                                        }}
                                    />

                                    {/* Icon + label */}
                                    <div className="flex items-center gap-3 relative z-10">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: `${pillar.accent}22` }}
                                        >
                                            <Icon
                                                className="w-5 h-5"
                                                style={{ color: pillar.accent }}
                                            />
                                        </div>
                                        <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-zinc-500">
                                            {pillar.label}
                                        </span>
                                    </div>

                                    {/* Headline */}
                                    <h3 className="text-2xl md:text-3xl font-display font-semibold tracking-[-0.02em] text-white leading-[1.15] relative z-10 whitespace-pre-line">
                                        {pillar.headline}
                                    </h3>

                                    {/* Body */}
                                    <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base relative z-10 flex-1">
                                        {pillar.body}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className="h-px w-0 group-hover:w-full transition-all duration-700 ease-out relative z-10"
                                        style={{ background: pillar.accent }}
                                    />
                                </div>
                            </FadeUp>
                        );
                    })}
                </div>
            </div>

            {/* ── MARQUEE TICKER ── */}
            <Ticker />

            {/* ── BOTTOM TAGLINE ── */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-12">
                <FadeUp delay={0.1}>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                        <p className="text-zinc-600 text-sm font-medium leading-relaxed max-w-sm">
                            Headquartered in India — serving clients across Southeast Asia,
                            the Middle East, and North America.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-zinc-500">
                                Currently accepting projects
                            </span>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
