"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const CARDS = [
    {
        num: "01",
        title: "BUSINESS FIRST",
        desc: "We focus on the problem behind the project, not just the technology.",
    },
    {
        num: "02",
        title: "DESIGN + ENGINEERING",
        desc: "Design and development work together from the first idea to the final product.",
    },
    {
        num: "03",
        title: "BUILT TO SCALE",
        desc: "We build flexible digital systems that can grow with your business.",
    },
    {
        num: "04",
        title: "LONG-TERM PARTNER",
        desc: "We don't stop at launch. We help you improve, adapt, and keep moving forward.",
    }
];

export default function WhyInfusionX() {
    const sectionRef = useRef<HTMLElement>(null);
    const rightCardsWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        // DESKTOP: Simple Vertical Scrolling with Sticky Left
        mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
            const section = sectionRef.current;
            const cardsWrapper = rightCardsWrapperRef.current;
            if (!section || !cardsWrapper) return;

            // Give the section enough height to scroll through all the cards
            // 300vh allows a nice paced scroll distance.
            gsap.set(section, { height: "300vh" });

            // Create scrub timeline tied to the section scroll progress
            // Translate the cards wrapper upwards
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top", // When section hits top of viewport
                    end: "bottom bottom", // When bottom of 300vh hits bottom of viewport
                    scrub: 1, // Smooth interpolated physical scrubbing
                }
            });

            // We calculate how far the cards need to travel so the last card is fully visible at the end
            // Usually, this is the total height of the cards minus the viewport height.
            const distanceToScroll = () => {
                const wrapperHeight = cardsWrapper.scrollHeight;
                const windowHeight = window.innerHeight;
                // Add some padding to ensure it scrolls fully out or rests nicely
                const offset = Math.max(0, wrapperHeight - windowHeight + 200);
                return -offset;
            };

            tl.to(cardsWrapper, {
                y: distanceToScroll,
                ease: "none"
            });

            return () => {
                gsap.set(section, { clearProps: "all" });
                gsap.set(cardsWrapper, { clearProps: "all" });
            };
        });

        return () => {
            mm.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} id="why-infusionx" className="relative bg-[#050505] border-t border-[#1A2028]">
            {/* The Sticky Stage: Keeps both columns in view while the inner right translates */}
            <div className="lg:sticky lg:top-0 lg:h-screen w-full py-24 md:py-32 lg:py-0 overflow-hidden flex items-center">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full h-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    
                    {/* ── LEFT COLUMN (Text) - FIXED ── */}
                    <div className="lg:w-1/2 flex flex-col items-start w-full relative z-20">
                        <FadeUp>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A2028] bg-[#0B0F14] text-[#858F9C] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 lg:mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
                                Why InfusionX
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium tracking-[-0.03em] text-[#F2F4F7] leading-[1.05] mb-6 lg:mb-8">
                                More than a <br className="hidden md:block" />
                                <span className="text-[#3B82F6]">development team.</span>
                            </h2>
                            <p className="text-[#858F9C] text-base md:text-xl leading-relaxed max-w-md font-light">
                                We combine strategy, design, and technology to build digital solutions around your business goals.
                            </p>
                        </FadeUp>
                    </div>

                    {/* ── RIGHT COLUMN (Cards) - SCROLLS UP ── */}
                    {/* On Desktop, this container takes the other half, but the inner div translates up */}
                    <div className="lg:w-1/2 w-full relative z-10 lg:h-screen flex items-center lg:items-start">
                        {/* The inner wrapper that physically translates upward on scroll */}
                        <div ref={rightCardsWrapperRef} className="flex flex-col gap-6 md:gap-8 w-full lg:pt-32 lg:pb-32">
                            {CARDS.map((card, i) => (
                                <FadeUp key={card.num} delay={0.15 * i} className="group cursor-pointer">
                                    <div className="relative">
                                        {/* Active card glow behind the card */}
                                        <div 
                                            className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-[60px] pointer-events-none" 
                                            style={{ backgroundColor: "#3B82F6" }} 
                                        />
                                        
                                        <div className="relative p-6 md:p-12 rounded-[2rem] border border-[#1A2028] bg-[#0B0F14] overflow-hidden transition-all duration-500 group-hover:border-[#3B82F6] group-hover:bg-[#0B1626]">
                                            {/* Number & Arrow row */}
                                            <div className="flex justify-between items-start mb-8 md:mb-16">
                                                <div className="text-4xl md:text-6xl font-display font-bold text-[#1A2028] transition-colors duration-500 group-hover:text-[#60A5FA]">
                                                    {card.num}
                                                </div>
                                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1A2028] flex items-center justify-center bg-transparent transition-all duration-500 group-hover:border-[#3B82F6] group-hover:bg-[#3B82F6]/10">
                                                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#858F9C] group-hover:text-[#60A5FA] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                                </div>
                                            </div>
                                            
                                            {/* Content */}
                                            <h3 className="text-lg md:text-2xl font-display font-semibold text-[#E5E9EF] tracking-wide mb-3 md:mb-4 transition-colors duration-500 group-hover:text-[#F5F7FA]">
                                                {card.title}
                                            </h3>
                                            <p className="text-[#858F9C] text-sm md:text-base leading-relaxed font-light max-w-sm transition-colors duration-500 group-hover:text-[#AAB4C1]">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
