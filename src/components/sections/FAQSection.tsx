"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
            {/* Subtle background glow */}
            <motion.div
                className="absolute top-[10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-[#3B82F6]/5 blur-[100px] pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-[800px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A2028] bg-transparent text-[#858F9C] text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
                        FAQ
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-medium tracking-[-0.03em] text-[#F2F4F7]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Common <span className="text-[#6B7280]">Questions</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {portfolioData.faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08, duration: 0.5 }}
                                className="relative group"
                            >
                                {/* Active glowing left border */}
                                <motion.div
                                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[#3B82F6]"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: isOpen ? 1 : 0,
                                        boxShadow: isOpen
                                            ? "0 0 10px rgba(59, 130, 246, 0.3)"
                                            : "none",
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                <div
                                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                                        isOpen
                                            ? 'border-[#3B82F6]/50 bg-[#0B1626] shadow-lg shadow-[#3B82F6]/5'
                                            : 'border-[#1A2028] bg-[#0A0D12] hover:border-[#1A2028]/80'
                                    }`}
                                >
                                    <button
                                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group/btn"
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    >
                                        <span className={`font-bold text-lg pr-4 transition-colors duration-300 ${isOpen ? 'text-[#F2F4F7]' : 'text-[#F2F4F7] group-hover/btn:text-[#3B82F6]'}`}>
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15 }}
                                        >
                                            <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-[#3B82F6]' : 'text-[#6B7280]'}`} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                                                    opacity: { duration: 0.3, delay: 0.1 },
                                                }}
                                            >
                                                <motion.div
                                                    className="px-6 pb-5 text-[#9CA3AF] leading-relaxed"
                                                    initial={{ y: -10 }}
                                                    animate={{ y: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                >
                                                    {faq.answer}
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
