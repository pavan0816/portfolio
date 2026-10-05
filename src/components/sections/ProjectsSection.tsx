"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Smartphone, Palette, Bot, Settings, Cloud, Rocket } from "lucide-react";

/* ─────────────────────────────────────────
   SERVICE CARDS DATA
──────────────────────────────────────────── */
const SERVICES = [
    {
        id: "01",
        label: "SYSTEM 01",
        title: "Website Development",
        description: "Modern, fast, and conversion-focused websites that build trust and generate leads.",
        color: "#4F46E5",
        textColor: "#FFFFFF",
        Icon: Globe,
    },
    {
        id: "02",
        label: "SYSTEM 02",
        title: "Mobile Apps",
        description: "High-performance mobile apps that deliver seamless experiences across iOS and Android devices.",
        color: "#7C3AED",
        textColor: "#FFFFFF",
        Icon: Smartphone,
    },
    {
        id: "03",
        label: "SYSTEM 03",
        title: "UI/UX Design",
        description: "User-centered designs that enhance usability, strengthen branding, and improve customer engagement.",
        color: "#F97316",
        textColor: "#FFFFFF",
        Icon: Palette,
    },
    {
        id: "04",
        label: "SYSTEM 04",
        title: "AI Solutions",
        description: "Intelligent AI solutions that automate tasks, improve efficiency, and enhance customer experiences.",
        color: "#10B981",
        textColor: "#FFFFFF",
        Icon: Bot,
    },
    {
        id: "05",
        label: "SYSTEM 05",
        title: "Business Automation",
        description: "Smart automation solutions that simplify workflows, reduce manual effort, and boost productivity.",
        color: "#E11D48",
        textColor: "#FFFFFF",
        Icon: Settings,
    },
    {
        id: "06",
        label: "SYSTEM 06",
        title: "Cloud & API Integration",
        description: "Secure cloud and API integrations that improve scalability, connectivity, and business performance.",
        color: "#0891B2", // Deep Cyan
        textColor: "#FFFFFF",
        Icon: Cloud,
    },
];

/* ─────────────────────────────────────────
   CARD INNER CONTENT
──────────────────────────────────────────── */
function CardContent({ service }: { service: (typeof SERVICES)[0] }) {
    const Icon = service.Icon;
    return (
        <div
            className="card-content-inner"
            style={{
                width: "88vw",
                maxWidth: "1160px",
                height: "65vh",
                minHeight: "400px",
                maxHeight: "560px",
                borderRadius: "36px",
                backgroundColor: service.color,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.05)",
                overflow: "hidden",
                position: "relative",
                // We will animate box-shadow and border in GSAP
            }}
        >
            {/* Subtle background texture/gradient */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at top right, rgba(255,255,255,0.15) 0%, transparent 60%)",
                    pointerEvents: "none",
                }}
            />
            
            <div style={{ display: "flex", height: "100%", position: "relative", zIndex: 1 }}>
                {/* LEFT — Content */}
                <div
                    style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        padding: "clamp(32px, 5vw, 60px)",
                        color: service.textColor,
                    }}
                >
                    {/* Label row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "auto" }}>
                        <div
                            className="card-icon-wrapper"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                background: "rgba(255,255,255,0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <Icon style={{ width: "20px", height: "20px", color: service.textColor }} />
                        </div>
                        <span
                            style={{
                                fontSize: "11px",
                                fontWeight: 700,
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                opacity: 0.7,
                            }}
                        >
                            {service.label}
                        </span>
                    </div>

                    {/* Title */}
                    <h3
                        style={{
                            fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            letterSpacing: "-0.04em",
                            textTransform: "uppercase",
                            margin: "clamp(20px, 3vw, 32px) 0 clamp(12px, 2vw, 16px)",
                            color: service.textColor,
                        }}
                    >
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: "clamp(15px, 1.4vw, 18px)",
                            lineHeight: 1.6,
                            opacity: 0.9,
                            maxWidth: "440px",
                            marginBottom: "clamp(24px, 3vw, 32px)",
                        }}
                    >
                        {service.description}
                    </p>

                    {/* CTA */}
                    <div>
                        <button
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "16px 32px",
                                borderRadius: "999px",
                                background: "#000000",
                                color: "#FFFFFF",
                                fontSize: "13px",
                                fontWeight: 800,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                border: "none",
                                cursor: "pointer",
                                transition: "transform 0.3s ease, background 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.background = "#111111";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.background = "#000000";
                            }}
                        >
                            START PROJECT
                            <Rocket style={{ width: "16px", height: "16px" }} />
                        </button>
                    </div>

                    {/* Watermark */}
                    <div style={{ marginTop: "auto", paddingTop: "32px" }}>
                        <span
                            style={{
                                fontSize: "9px",
                                fontFamily: "monospace",
                                letterSpacing: "0.3em",
                                textTransform: "uppercase",
                                opacity: 0.4,
                            }}
                        >
                            InfusionX Growth Engine V2.0 // Stacked Layer {service.id}
                        </span>
                    </div>
                </div>

                {/* RIGHT — Illustration (desktop only) */}
                <div
                    style={{
                        display: "flex",
                        flex: "1.1",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "clamp(24px, 4vw, 64px)",
                    }}
                    className="hidden lg:flex"
                >
                    <div
                        className="card-illustration-box"
                        style={{
                            maxWidth: "340px",
                            width: "100%",
                            aspectRatio: "4/3",
                            borderRadius: "20px",
                            border: "2px solid rgba(255,255,255,0.1)",
                            background: "rgba(255,255,255,0.05)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                        }}
                    >
                        <Icon
                            style={{
                                width: "72px",
                                height: "72px",
                                color: service.textColor,
                                opacity: 0.4,
                                strokeWidth: 1.5,
                            }}
                        />
                        <span
                            style={{
                                position: "absolute",
                                bottom: "14px",
                                right: "14px",
                                fontSize: "8px",
                                fontFamily: "monospace",
                                letterSpacing: "0.28em",
                                textTransform: "uppercase",
                                opacity: 0.3,
                                color: service.textColor,
                            }}
                        >
                            {service.label}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   MAIN SECTION
──────────────────────────────────────────── */
const TOTAL = SERVICES.length;
const SECTION_SCREENS = TOTAL + 1;

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
    const ambientGlowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const ambientGlow = ambientGlowRef.current;
        if (!section || !ambientGlow) return;

        const cards = cardWrapRefs.current.filter(Boolean) as HTMLDivElement[];
        const n = cards.length;
        const vh = window.innerHeight;

        // Init cards
        gsap.set(cards[0], { y: 0, scale: 1 });
        const cardInner0 = cards[0].querySelector(".card-content-inner");
        if (cardInner0) {
            gsap.set(cardInner0, {
                boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.35)`,
                borderColor: `rgba(255,255,255,0.2)`
            });
        }
        gsap.set(ambientGlow, { backgroundColor: SERVICES[0].color });

        for (let i = 1; i < n; i++) {
            gsap.set(cards[i], { y: vh, scale: 1 });
            const cardInner = cards[i].querySelector(".card-content-inner");
            if (cardInner) {
                gsap.set(cardInner, {
                    boxShadow: `0 0px 0px rgba(0,0,0,0)`,
                    borderColor: `rgba(255,255,255,0.05)`
                });
            }
        }

        const triggers: ScrollTrigger[] = [];

        for (let i = 1; i < n; i++) {
            const card = cards[i];
            const prevCard = cards[i - 1];
            const cardInner = card.querySelector(".card-content-inner");
            
            const tl = gsap.timeline({ paused: true });

            // Slide up
            tl.to(card, { y: 0, ease: "none" }, 0);
            
            // Subtly scale down the previous card
            tl.to(prevCard, { scale: 0.94, ease: "none" }, 0);

            // Animate card visual accents (shadow + border)
            if (cardInner) {
                tl.to(cardInner, {
                    boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.35)`,
                    borderColor: `rgba(255,255,255,0.2)`,
                    ease: "none"
                }, 0);
            }

            // Animate the ambient background glow to match the incoming card
            tl.to(ambientGlow, {
                backgroundColor: SERVICES[i].color,
                ease: "none"
            }, 0);

            const trigger = ScrollTrigger.create({
                trigger: section,
                start: `top+=${(i - 1) * vh}px top`,
                end: `top+=${i * vh}px top`,
                scrub: 1,
                animation: tl,
            });

            triggers.push(trigger);
        }

        ScrollTrigger.refresh();

        const onResize = () => {
            const newVh = window.innerHeight;
            for (let i = 1; i < n; i++) {
                const progress = triggers[i - 1]?.progress ?? 0;
                if (progress === 0) {
                    gsap.set(cards[i], { y: newVh });
                }
            }
            ScrollTrigger.refresh();
        };
        window.addEventListener("resize", onResize);

        return () => {
            triggers.forEach((t) => t.kill());
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <section id="projects" className="relative bg-[#0A0A0A]" aria-label="Services">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    ref={ambientGlowRef}
                    className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-15"
                    style={{ backgroundColor: SERVICES[0].color }}
                />
            </div>

            {/* Section Header */}
            <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-10 text-center z-10">
                <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                    What We Build
                </span>
                <h2 className="section-title text-white mb-6">
                    Our <span className="text-zinc-500">Systems</span>
                </h2>
                <p className="body-premium max-w-2xl mx-auto">
                    Five interconnected growth systems — each one a card in the deck,
                    each one ready to deploy for your business.
                </p>
            </div>

            {/* Scroll Container */}
            <div
                ref={sectionRef}
                style={{ height: `${SECTION_SCREENS * 100}vh` }}
                className="relative z-10"
            >
                {/* Sticky Stage */}
                <div
                    className="sticky top-0 w-full"
                    style={{
                        height: "100vh",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            ref={(el) => { cardWrapRefs.current[index] = el; }}
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: index + 1,
                                willChange: "transform",
                            }}
                        >
                            <CardContent service={service} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-8 bg-[#0A0A0A] relative z-10" />
        </section>
    );
}