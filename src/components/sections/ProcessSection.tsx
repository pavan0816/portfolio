"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Search, PenTool, Code2, Rocket, RefreshCcw } from "lucide-react";

const steps = [
    { id: 1, title: "Discovery & Strategy", description: "We analyze your business needs, goals, and technical requirements to formulate a strategic roadmap.", icon: <Search />, color: "from-blue-500 to-cyan-500" },
    { id: 2, title: "UI/UX & Prototyping", description: "Our designers craft intuitive, stunning user interfaces mapping out the entire user journey.", icon: <PenTool />, color: "from-purple-500 to-pink-500" },
    { id: 3, title: "Agile Development", description: "Our engineers build your scalable solution using modern frameworks and cutting-edge AI technologies.", icon: <Code2 />, color: "from-emerald-500 to-teal-500" },
    { id: 4, title: "Testing & Deployment", description: "Rigorous QA testing ensures a bug-free, highly performant product ready for a seamless launch.", icon: <Rocket />, color: "from-amber-500 to-orange-500" },
    { id: 5, title: "Maintenance & Support", description: "We provide ongoing support, monitoring, and feature updates to ensure long-term success.", icon: <RefreshCcw />, color: "from-rose-500 to-red-500" },
];

function StepNode({ step, index }: { step: typeof steps[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-12 lg:pl-0 lg:mt-0"
        >
            {/* Mobile Timeline Dot with ripple */}
            <div className="lg:hidden absolute left-[-5px] top-2">
                <motion.div
                    className="w-3 h-3 bg-primary rounded-full"
                    animate={isInView ? {
                        boxShadow: [
                            "0 0 0 0 rgba(var(--primary), 0.4)",
                            "0 0 0 10px rgba(var(--primary), 0)",
                        ],
                    } : {}}
                    transition={{ duration: 1.5, repeat: 2 }}
                />
            </div>

            {/* Desktop Node with animation */}
            <motion.div
                className="hidden lg:flex w-24 h-24 mx-auto bg-background dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-full items-center justify-center relative z-10 mb-8 shadow-sm overflow-hidden group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {/* Animated gradient ring */}
                <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Spinning border */}
                <motion.div
                    className="absolute inset-[-2px] rounded-full"
                    style={{
                        background: `conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.3), transparent)`,
                    }}
                    animate={isInView ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full bg-background dark:bg-black flex items-center justify-center">
                    <motion.div
                        className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center"
                        animate={isInView ? { rotate: [0, 360] } : {}}
                        transition={{ delay: index * 0.15 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {step.icon}
                    </motion.div>
                </div>

                {/* Pulse ripple on enter */}
                {isInView && (
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/30"
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1, delay: index * 0.15 + 0.2 }}
                    />
                )}
            </motion.div>

            <div className="lg:text-center">
                {/* Animated step number */}
                <motion.div
                    className="text-primary font-black text-xl mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.1, type: "spring", stiffness: 200 }}
                >
                    0{step.id}.
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
        </motion.div>
    );
}

export default function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 60%"],
    });
    const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-32 px-6 bg-background dark:bg-black overflow-hidden relative">
            {/* Animated background blob */}
            <motion.div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-black tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Our Development Process
                    </motion.h2>
                </div>

                <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-6 md:ml-12 lg:ml-0 lg:border-none space-y-12 lg:space-y-0">
                    {/* Desktop horizontal line that draws itself */}
                    <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[1px] bg-zinc-200 dark:bg-zinc-800" />
                    <motion.div
                        className="hidden lg:block absolute top-[45px] left-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-cyan-500 z-10"
                        style={{ width: lineWidth }}
                    />

                    <div className="lg:grid lg:grid-cols-5 gap-8">
                        {steps.map((step, i) => (
                            <StepNode key={step.id} step={step} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
