"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about-us" },
    { label: "Services", href: "#projects" },
    { label: "Projects", href: "#selected-work" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/InfusionX", icon: Github },
    { label: "Email", href: "mailto:hello@infusionx.com", icon: Mail },
];

export function Footer() {
    return (
        <footer className="relative bg-black text-[#F2F4F7] pt-20 pb-10 overflow-hidden border-t border-[#1A2028] z-20">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
                    {/* Column 1: Brand */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <img src="/logo-dark.svg" alt="InfusionX" className="h-8 w-auto mb-3" />
                            <p className="text-xs tracking-[0.2em] uppercase text-[#6B7280] font-medium">
                                Digital Engineering & AI
                            </p>
                        </div>
                        <p className="text-sm text-[#858F9C] font-light leading-relaxed max-w-xs">
                            Building intelligent digital products that drive growth for ambitious businesses worldwide.
                        </p>
                        <div className="flex gap-3">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full border border-[#1A2028] flex items-center justify-center text-[#6B7280] hover:text-[#60A5FA] hover:border-[#3B82F6]/50 bg-[#0A0D12] transition-all duration-500"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#858F9C] mb-6">Navigation</h4>
                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-[#6B7280] hover:text-[#F2F4F7] transition-colors duration-300 font-light flex items-center gap-2 group"
                                >
                                    {link.label}
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#858F9C] mb-6">Get in Touch</h4>
                        <div className="flex flex-col gap-4">
                            <Link href="mailto:hello@infusionx.com" className="text-sm text-[#6B7280] hover:text-[#60A5FA] transition-colors duration-300 font-light">
                                hello@infusionx.com
                            </Link>
                            <p className="text-sm text-[#6B7280] font-light">
                                India · Global Delivery
                            </p>
                            <div className="flex items-center gap-3 mt-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs tracking-[0.15em] uppercase text-[#858F9C] font-medium">
                                    Currently accepting projects
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Massive Brand Footer Text */}
                <div className="flex flex-col items-center justify-center pt-16 border-t border-[#1A2028] relative overflow-hidden">
                    <motion.h1 
                        className="text-[clamp(4rem,15vw,18rem)] font-black text-white/[0.07] tracking-tighter leading-none select-none mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        INFUSIONX
                    </motion.h1>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between w-full text-[#6B7280] text-sm font-medium">
                        <p>© {new Date().getFullYear()} InfusionX. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link href="#" className="hover:text-[#F2F4F7] transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-[#F2F4F7] transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
