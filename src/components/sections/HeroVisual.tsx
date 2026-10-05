"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Magnetic Button Component for premium interaction
function MagneticButton({ children, href, primary = false }: { children: React.ReactNode, href: string, primary?: boolean }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}>
            <Link 
                href={href} 
                ref={ref}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                className={cn(
                    "relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-full font-sans text-xs tracking-[0.15em] font-medium uppercase transition-all duration-700",
                    primary 
                        ? "bg-white text-black hover:scale-[1.02]" 
                        : "border border-white/10 text-white/70 hover:text-white hover:bg-white/5"
                )}
            >
                {primary && (
                    <div className="absolute inset-0 bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-700" />
                )}
                <span className="relative z-10">{children}</span>
                {primary && <ArrowRight className="relative z-10 w-4 h-4" />}
            </Link>
        </motion.div>
    );
}

export function HeroVisual() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Parallax & Scroll
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse Parallax for Atmospheric Light
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 50, mass: 2 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 50, mass: 2 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 100; // -50 to 50
        const y = (e.clientY / innerHeight - 0.5) * 100; // -50 to 50
        mouseX.set(x);
        mouseY.set(y);
    };

    // Choreographed Sequence Variants
    const atmosphereVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2, delay: 0.5, ease: "easeInOut" } }
    };

    const eyebrowVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] } }
    };

    const textRevealVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(12px)", scale: 0.98 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: { duration: 2, delay: 1.8 + (custom * 0.3), ease: [0.16, 1, 0.3, 1] }
        })
    };

    const ctaVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 3.2, ease: [0.16, 1, 0.3, 1] } }
    };

    const scrollLineVariants = {
        hidden: { opacity: 0, scaleY: 0 },
        visible: { opacity: 1, scaleY: 1, transition: { duration: 1.5, delay: 4.0, ease: "easeInOut" } }
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#020202]"
        >
            {/* Cinematic Background Atmosphere (Phase 1 & 2) */}
            <motion.div 
                variants={atmosphereVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 z-0 pointer-events-none"
            >
                {/* Technical Grid */}
                <div 
                    className="absolute inset-0 opacity-[0.03]" 
                    style={{ 
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }} 
                />
                
                {/* Reactive Light Bloom - "Titanium" Accent */}
                <motion.div 
                    style={{ x: springX, y: springY }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] rounded-full blur-[160px] opacity-40 mix-blend-screen"
                    animate={{
                        background: [
                            "radial-gradient(circle, rgba(163,184,204,0.15) 0%, rgba(163,184,204,0) 70%)",
                            "radial-gradient(circle, rgba(163,184,204,0.2) 0%, rgba(163,184,204,0) 70%)"
                        ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
            </motion.div>

            {/* Main Content (Phase 4-7) */}
            <motion.div
                style={{ y: yContent, opacity: opacityContent }}
                className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center justify-center text-center mt-20"
            >
                {/* Eyebrow */}
                <motion.div variants={eyebrowVariants} initial="hidden" animate="visible" className="mb-8">
                    <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">
                            Digital Engineering & Design
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                </motion.div>

                {/* Massive Typography Reveal */}
                <div className="overflow-hidden mb-2">
                    <motion.h1 custom={0} variants={textRevealVariants} initial="hidden" animate="visible" className="hero-title">
                        ARCHITECTING
                    </motion.h1>
                </div>
                <div className="overflow-hidden mb-12">
                    <motion.h1 custom={1} variants={textRevealVariants} initial="hidden" animate="visible" className="hero-title text-[#A1A1AA]">
                        THE FUTURE.
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.div custom={2} variants={textRevealVariants} initial="hidden" animate="visible" className="overflow-hidden mb-16">
                    <p className="body-premium max-w-2xl mx-auto">
                        We are a premium digital agency engineering high-performance <br className="hidden sm:block" />
                        software and cinematic visual experiences.
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div variants={ctaVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row items-center gap-6">
                    <MagneticButton href="#projects" primary>
                        View Our Work
                    </MagneticButton>
                    <MagneticButton href="#contact">
                        Start A Project
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator (Phase 8) */}
            <motion.div 
                variants={scrollLineVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent origin-top" />
            </motion.div>
        </section>
    );
}
