"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

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
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        description: ""
    });

    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const services = [
        "Website Development",
        "Mobile App",
        "UI/UX Design",
        "AI Solutions",
        "Business Automation",
        "Cloud & API Integration",
        "Other"
    ];

    const budgets = [
        "Under $5K",
        "$5K - $15K",
        "$15K - $50K",
        "$50K+",
        "Let's discuss"
    ];

    const timelines = [
        "ASAP",
        "1-3 months",
        "3-6 months",
        "6+ months",
        "Flexible"
    ];

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!formState.name.trim()) newErrors.name = "Name is required";
        if (!formState.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = "Invalid email address";
        if (!formState.description.trim()) newErrors.description = "Project description is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setFormStatus('submitting');
        try {
            const messageBody = [
                formState.description,
                formState.company ? `\nCompany: ${formState.company}` : '',
                formState.service ? `\nService: ${formState.service}` : '',
                formState.budget ? `\nBudget: ${formState.budget}` : '',
                formState.timeline ? `\nTimeline: ${formState.timeline}` : '',
            ].join('');

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    subject: formState.service || 'Project Inquiry',
                    message: messageBody,
                }),
            });

            if (res.ok) {
                setFormStatus('success');
                setFormState({ name: "", email: "", company: "", service: "", budget: "", timeline: "", description: "" });
            } else {
                setFormStatus('error');
            }
        } catch {
            setFormStatus('error');
        }
    };

    const inputClasses = (field: string) =>
        `w-full bg-[#0D1117] border ${errors[field] ? 'border-red-500/50' : 'border-[#1A2028]'} rounded-xl px-4 py-4 text-[#F2F4F7] placeholder-[#6B7280] focus:outline-none focus:border-[#3B82F6]/50 focus:bg-[#0D1117] transition-all duration-300 text-sm`;

    return (
        <section id="contact" ref={sectionRef} className="relative flex items-center justify-center overflow-hidden bg-[#050505] z-10 pt-20 pb-16">
            {/* Atmospheric Background */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-10" />
            
            <motion.div 
                style={{ y, scale, opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(59,130,246,0.05)_360deg)] rounded-full blur-[100px]"
                />
            </motion.div>

            {/* Glowing orb */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-[#F2F4F7] mb-2 uppercase tracking-tighter leading-[0.92]">
                        Let&apos;s Build Something
                    </h2>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-[#3B82F6] mb-10 uppercase tracking-tighter leading-[0.92]">
                        Extraordinary
                    </h2>

                    {formStatus === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-3xl mx-auto p-12 md:p-16 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 text-center"
                        >
                            <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                            <h3 className="text-2xl font-display font-semibold text-[#F2F4F7] mb-3">Message Sent!</h3>
                            <p className="text-[#9CA3AF] mb-8">We&apos;ll get back to you within 24 hours.</p>
                            <button
                                onClick={() => setFormStatus('idle')}
                                className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase hover:text-[#60A5FA] transition-colors"
                            >
                                Send Another Message
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto text-left space-y-5 relative z-30">
                            {formStatus === 'error' && (
                                <div className="flex items-center gap-3 p-4 rounded-xl border border-red-500/30 bg-red-500/5 text-red-400 text-sm">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    Failed to send message. Please try again or email us directly.
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold tracking-wider text-[#858F9C] uppercase">Name *</label>
                                    <input 
                                        type="text" 
                                        placeholder="Your name"
                                        value={formState.name}
                                        onChange={(e) => { setFormState({...formState, name: e.target.value}); setErrors({...errors, name: ''}); }}
                                        className={inputClasses('name')}
                                    />
                                    {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold tracking-wider text-[#858F9C] uppercase">Email *</label>
                                    <input 
                                        type="email" 
                                        placeholder="you@company.com"
                                        value={formState.email}
                                        onChange={(e) => { setFormState({...formState, email: e.target.value}); setErrors({...errors, email: ''}); }}
                                        className={inputClasses('email')}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold tracking-wider text-[#858F9C] uppercase">Company</label>
                                <input 
                                    type="text" 
                                    placeholder="Your company name"
                                    value={formState.company}
                                    onChange={(e) => setFormState({...formState, company: e.target.value})}
                                    className={inputClasses('company')}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div className="space-y-1.5 relative">
                                    <label className="text-xs font-semibold tracking-wider text-[#858F9C] uppercase">Service</label>
                                    <div className="relative">
                                        <select 
                                            value={formState.service}
                                            onChange={(e) => setFormState({...formState, service: e.target.value})}
                                            className={`${inputClasses('service')} appearance-none cursor-pointer`}
                                        >
                                            <option value="" className="bg-[#0D1117] text-[#6B7280]">Select service</option>
                                            {services.map((s) => (
                                                <option key={s} value={s} className="bg-[#0D1117] text-[#F2F4F7]">{s}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-1.5 relative">
                                    <label className="text-xs font-semibold tracking-wider text-[#858F9C] uppercase">Budget</label>
                                    <div className="relative">
                                        <select 
                                            value={formState.budget}
                                            onChange={(e) => setFormState({...formState, budget: e.target.value})}
                                            className={`${inputClasses('budget')} appearance-none cursor-pointer`}
                                        >
                                            <option value="" className="bg-[#0D1117] text-[#6B7280]">Select budget</option>
                                            {budgets.map((b) => (
                                                <option key={b} value={b} className="bg-[#0D1117] text-[#F2F4F7]">{b}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-1.5 relative">
                                    <label className="text-xs font-semibold tracking-wider text-[#858F9C] uppercase">Timeline</label>
                                    <div className="relative">
                                        <select 
                                            value={formState.timeline}
                                            onChange={(e) => setFormState({...formState, timeline: e.target.value})}
                                            className={`${inputClasses('timeline')} appearance-none cursor-pointer`}
                                        >
                                            <option value="" className="bg-[#0D1117] text-[#6B7280]">Select timeline</option>
                                            {timelines.map((t) => (
                                                <option key={t} value={t} className="bg-[#0D1117] text-[#F2F4F7]">{t}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold tracking-wider text-[#858F9C] uppercase">Project Description *</label>
                                <textarea 
                                    placeholder="Tell us about your project, goals, and timeline..."
                                    rows={4}
                                    value={formState.description}
                                    onChange={(e) => { setFormState({...formState, description: e.target.value}); setErrors({...errors, description: ''}); }}
                                    className={`${inputClasses('description')} resize-none`}
                                />
                                {errors.description && <p className="text-red-400 text-xs">{errors.description}</p>}
                            </div>

                            <div className="pt-4 flex justify-center">
                                <button 
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="group relative inline-flex items-center gap-3 bg-[#3B82F6] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#60A5FA] hover:scale-[1.02] shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(96,165,250,0.5)] transition-all duration-500 disabled:opacity-70"
                                >
                                    {formStatus === 'submitting' ? "Sending..." : "Send Message"}
                                    {formStatus !== 'submitting' && <Send className="w-4 h-4 group-hover:translate-x-1 transition-all" />}
                                </button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
}
