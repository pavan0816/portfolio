"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { CinematicSection } from "@/components/ui/CinematicSection";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
];

const socials = [
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "Email", href: "mailto:hello@infusionx.com", icon: Mail }
];

export function Footer() {
    return (
        <footer className="relative bg-[#000000] text-white pt-16 pb-10 overflow-hidden border-t border-white/5 z-20">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-white/5 blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* Massive Brand Footer Text */}
                <div className="flex flex-col items-center justify-center pt-16 border-t border-white/10 relative overflow-hidden">
                    <motion.h1 
                        className="text-[clamp(4rem,15vw,18rem)] font-black text-white/5 tracking-tighter leading-none select-none mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        INFUSIONX
                    </motion.h1>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between w-full text-zinc-500 text-sm font-medium">
                        <p>© {new Date().getFullYear()} InfusionX. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
