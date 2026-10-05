"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CinematicSection } from "@/components/ui/CinematicSection";

const founders = [
    {
        name: "Pavan",
        role: "Co-Founder & Creative Director",
        description: "Leading the creative vision and strategy, transforming ideas into engaging digital experiences.",
        expertise: ["Creative Direction", "UI/UX", "Design Systems"],
        initial: "P",
        linkedin: "#",
        email: "mailto:pavan@infusionx.com"
    },
    {
        name: "Umesh",
        role: "Co-Founder & Business Dev",
        description: "Bridging technology and business by managing client relationships and driving real business value.",
        expertise: ["Business Dev", "Client Relations", "Strategy"],
        initial: "U",
        linkedin: "#",
        email: "mailto:umesh@infusionx.com"
    },
    {
        name: "Vignesh",
        role: "Co-Founder & CTO",
        description: "Transforming business requirements into scalable, secure, and high-performance architectures.",
        expertise: ["Tech Architecture", "Engineering", "Execution"],
        initial: "V",
        linkedin: "#",
        email: "mailto:vignesh@infusionx.com"
    },
    {
        name: "Narashmiha",
        role: "Co-Founder & Customer Success",
        description: "Building long-term client relationships and ensuring exceptional customer experience and support.",
        expertise: ["Customer Success", "Client Relations"],
        initial: "N",
        linkedin: "#",
        email: "mailto:narashmiha@infusionx.com"
    }
];



export default function AboutSection() {
    return (
        <section id="about" className="relative bg-[#000000] py-20 z-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                


                {/* Founders Grid */}
                <CinematicSection parallaxOffset={30} className="space-y-16">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 pb-6 gap-6">
                        <h3 className="text-3xl md:text-4xl font-display font-medium tracking-[-0.02em] text-white">The Leadership</h3>
                        <Link href="#contact" className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-500">
                            Work With Us
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {founders.map((founder, i) => (
                            <motion.div 
                                key={founder.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative bg-[#050505] border border-white/5 p-8 md:p-10 rounded-2xl hover:bg-[#0A0A0A] hover:border-white/10 transition-all duration-700"
                            >
                                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-8">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-700">
                                        <span className="text-xl font-display font-semibold text-white/80">{founder.initial}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-display font-medium text-white mb-1">{founder.name}</h4>
                                        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">{founder.role}</p>
                                    </div>
                                </div>
                                
                                <p className="text-zinc-400 leading-relaxed font-light mb-8 max-w-sm">
                                    {founder.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-auto pb-8">
                                    {founder.expertise.map(exp => (
                                        <span key={exp} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-400 font-medium">
                                            {exp}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute top-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <Link href={founder.linkedin} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-500">
                                        <Linkedin className="w-4 h-4" />
                                    </Link>
                                    <Link href={founder.email} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-500">
                                        <Mail className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </CinematicSection>
            </div>
        </section>
    );
}
