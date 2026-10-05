"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 bg-background dark:bg-black relative overflow-hidden">
            {/* Subtle background animation */}
            <motion.div
                className="absolute top-[10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/3 blur-[100px] pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-[800px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        FAQ
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-black tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Common Questions
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
                                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-primary"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: isOpen ? 1 : 0,
                                        boxShadow: isOpen
                                            ? "0 0 10px rgba(var(--primary), 0.3)"
                                            : "none",
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                <div
                                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                                        isOpen
                                            ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/5'
                                            : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700'
                                    }`}
                                >
                                    <button
                                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group/btn"
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    >
                                        <span className="font-bold text-lg pr-4 group-hover/btn:text-primary transition-colors duration-300">
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15 }}
                                        >
                                            <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
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
                                                    className="px-6 pb-5 text-muted-foreground leading-relaxed"
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
