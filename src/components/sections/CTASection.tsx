"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Send } from "lucide-react";

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    const [formState, setFormState] = useState({
        fullName: "",
        email: "",
        mobile: "",
        projectType: "",
        details: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent successfully!");
            setFormState({ fullName: "", email: "", mobile: "", projectType: "", details: "" });
        }, 1500);
    };

    const projectTypes = [
        "I need an E-commerce Website to sell online",
        "I need a Professional Website for my business",
        "I need a Professional Portfolio for my work",
        "I need a Booking/Appointment system for my service",
        "I want to grow my presence on Google (SEO)",
        "I need help with Branding & Social Media",
        "I want to fix or update my existing Website",
        "I need a Custom solution for my business",
        "Other Inquiry"
    ];

    return (
        <section id="contact" ref={sectionRef} className="relative flex items-center justify-center overflow-hidden bg-black z-10 pt-20 pb-16">
            {/* Atmospheric Climax Background */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-10" />
            
            <motion.div 
                style={{ y, scale, opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                {/* Slow moving cinematic gradient */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.05)_360deg)] rounded-full blur-[100px]"
                />
            </motion.div>

            {/* Glowing orb behind text */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="hero-title text-white mb-8 uppercase">
                        Send us a <br />
                        <span className="text-zinc-600">Message</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto text-left space-y-6 relative z-30">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">Full name</label>
                                <input 
                                    type="text" 
                                    placeholder="Your full name"
                                    required
                                    value={formState.fullName}
                                    onChange={(e) => setFormState({...formState, fullName: e.target.value})}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                                />
                            </div>

                            {/* Work Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">Work email</label>
                                <input 
                                    type="email" 
                                    placeholder="you@company.com"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Mobile Number */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">Mobile number</label>
                            <input 
                                type="tel" 
                                placeholder="+91 98765 43210"
                                value={formState.mobile}
                                onChange={(e) => setFormState({...formState, mobile: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                            />
                        </div>

                        {/* Project Type */}
                        <div className="space-y-2 relative">
                            <label className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">What are you looking for?</label>
                            <div className="relative">
                                <select 
                                    required
                                    value={formState.projectType}
                                    onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                                >
                                    <option value="" disabled className="bg-zinc-900 text-zinc-500">Choose a project type</option>
                                    {projectTypes.map((type, i) => (
                                        <option key={i} value={type} className="bg-zinc-900 text-white">{type}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">Tell us about your project</label>
                            <textarea 
                                placeholder="Briefly describe your business, goals, and timeline..."
                                required
                                rows={4}
                                value={formState.details}
                                onChange={(e) => setFormState({...formState, details: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <div className="pt-4 flex justify-center">
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300 disabled:opacity-70 disabled:hover:bg-white/5"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <Send className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
            
            {/* Fade to footer */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
}
