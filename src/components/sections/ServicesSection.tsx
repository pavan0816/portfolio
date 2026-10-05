"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Globe, Smartphone, Palette, Bot, Settings, Cloud, Megaphone, ArrowUpRight
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { CinematicSection } from "@/components/ui/CinematicSection";

/* ── Icon Mapping ── */
const ICON_MAP: Record<string, React.ElementType> = {
    software: Globe,
    mobile: Smartphone,
    design: Palette,
    ai: Bot,
    devops: Settings,
    cloud: Cloud,
    marketing: Megaphone,
};

/* ── Short Highlights Per Service ── */
const HIGHLIGHTS: Record<string, string[]> = {
    "Web Application Development": ["Scalable SaaS", "Real-time Features", "Custom Dashboards"],
    "Mobile App Development":      ["Cross-platform", "Native Performance", "Offline-first"],
    "UI/UX Design":                ["User Research", "Design Systems", "Prototyping"],
    "AI Solutions":                ["Chatbots & Voice", "Autonomous Workflows", "LLM Integration"],
    "Business Automation":         ["Workflow Optimization", "CRM Integration", "Cost Reduction"],
    "Cloud & API Integration":     ["AWS / GCP / Azure", "REST & GraphQL", "CI/CD Pipelines"],
    "Digital Marketing":           ["SEO Strategy", "Paid Advertising", "Growth Analytics"],
};

/* ── Service Card (Uniform) ── */
function ServiceCard({
    service,
    index,
}: {
    service: { name: string; category: string; description?: string };
    index: number;
}) {
    const Icon = ICON_MAP[service.category] || Globe;
    const highlights = HIGHLIGHTS[service.name] ?? ["Premium Quality", "Scalable", "Reliable"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={cn(
                    "group relative flex flex-col h-[380px] md:h-[400px]",
                    "rounded-2xl overflow-hidden",
                    "bg-[#0A0A0A] border border-white/5",
                    "p-7 md:p-8",
                    "transition-colors duration-500",
                    "hover:border-white/15 hover:bg-[#0D0D0D]",
                    "hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
                )}
            >
                {/* Subtle ambient glow on hover */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-500">
                    {React.createElement(Icon, { className: "w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-500" } as any)}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-display font-medium text-white tracking-[-0.02em] mb-3 leading-tight">
                    {service.name}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-zinc-400 leading-relaxed mb-6 font-light line-clamp-3">
                    {service.description}
                </p>

                {/* Highlights */}
                <ul className="relative z-10 flex flex-wrap gap-2 mb-auto">
                    {highlights.map((h, i) => (
                        <li
                            key={i}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-400 font-medium"
                        >
                            {h}
                        </li>
                    ))}
                </ul>

                {/* CTA Arrow - pinned bottom */}
                <div className="relative z-10 flex items-center gap-2 pt-5 mt-auto">
                    <span className="text-xs font-semibold tracking-widest uppercase text-white/40 group-hover:text-white/80 transition-colors duration-500">
                        Learn More
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ── Services Section ── */
export default function ServicesSection() {
    const services = portfolioData.hardSkills;

    return (
        <section id="services" className="relative bg-black py-24 md:py-32 z-20">
            {/* Section Header */}
            <CinematicSection parallaxOffset={40} className="max-w-[1200px] mx-auto text-center px-6 md:px-12 space-y-6 mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-4"
                >
                    <span className="px-5 py-2 rounded-full bg-white/5 text-zinc-500 text-xs font-semibold tracking-[0.2em] uppercase border border-white/10">
                        What We Do
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="section-title text-white"
                >
                    Our Capabilities
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="body-premium max-w-3xl mx-auto"
                >
                    End-to-end digital product development — from concept to scale.
                </motion.p>
            </CinematicSection>

            {/* Card Grid */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.name}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
