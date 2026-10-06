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
        <section id="about" className="relative bg-[#050505] py-20 z-20 overflow-hidden">
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
                                className="group relative bg-[#0A0D11] border border-[#1A2028] p-8 md:p-10 rounded-2xl hover:border-[#3B82F6] hover:-translate-y-[3px] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
                            >
                                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-8">
                                    <div className="relative w-16 h-16 rounded-full bg-[#050505] border border-[#1A2028] group-hover:border-[#3B82F6]/50 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.15)] transition-all duration-500 overflow-hidden">
                                        {/* Subtle blue rim/light effect around the portrait container */}
                                        <div className="absolute inset-0 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <span className="relative z-10 text-xl font-display font-semibold text-[#8B95A3] group-hover:text-[#F2F4F7] transition-colors duration-500">{founder.initial}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-display font-medium text-[#F2F4F7] group-hover:text-white transition-colors duration-500 mb-1">{founder.name}</h4>
                                        <p className="text-xs font-semibold tracking-widest text-[#7F8996] uppercase">{founder.role}</p>
                                    </div>
                                </div>
                                
                                <p className="text-[#8B95A3] leading-relaxed font-light mb-8 max-w-sm">
                                    {founder.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-auto pb-8">
                                    {founder.expertise.map(exp => (
                                        <span key={exp} className="px-3 py-1 rounded-full bg-[#050505] border border-[#1A2028] text-xs text-[#7F8996] font-medium group-hover:border-[#3B82F6]/30 group-hover:text-[#F2F4F7] transition-colors duration-500">
                                            {exp}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute top-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Link href={founder.linkedin} className="w-10 h-10 rounded-full border border-[#1A2028] flex items-center justify-center text-[#7F8996] hover:text-[#60A5FA] hover:border-[#3B82F6]/50 bg-[#050505] transition-all duration-500">
                                        <Linkedin className="w-4 h-4" />
                                    </Link>
                                    <Link href={founder.email} className="w-10 h-10 rounded-full border border-[#1A2028] flex items-center justify-center text-[#7F8996] hover:text-[#60A5FA] hover:border-[#3B82F6]/50 bg-[#050505] transition-all duration-500">
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
