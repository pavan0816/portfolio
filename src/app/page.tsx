'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { LoadingScreen } from '@/components/layout';
import { DeferredMount } from '@/components/ui/DeferredMount';
import { usePreloadState } from "@/components/ui/premium-page-transition";

import { HeroVisual } from "@/components/sections/HeroVisual";
import AboutUs from "@/components/sections/AboutUs";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SelectedWork from "@/components/sections/SelectedWork";
import HowWeWork from "@/components/sections/HowWeWork";
import WhyInfusionX from "@/components/sections/WhyInfusionX";
import WhatClientsSay from "@/components/sections/WhatClientsSay";
import CTASection from "@/components/sections/CTASection";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
    const { phase } = usePreloadState();
    const [isLoading, setIsLoading] = useState(true);
    const [isInitialLoadingExit, setIsInitialLoadingExit] = useState(false);
    const [skipAnimation, setSkipAnimation] = useState(false);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem('portfolioLoaded');
        if (hasLoaded) {
            setSkipAnimation(true);
            setIsLoading(false);
        }

        if (typeof window === 'undefined' || !('ResizeObserver' in window)) return;
        const refreshLayout = () => {
            window.dispatchEvent(new Event('resize'));
            ScrollTrigger.refresh();
        };
        const resizeObserver = new ResizeObserver(() => { refreshLayout(); });
        resizeObserver.observe(document.body);
        window.addEventListener('load', refreshLayout);
        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('load', refreshLayout);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const isReadyToAnimate = isLoading ? isInitialLoadingExit : phase === "done";

    useEffect(() => {
        if (isReadyToAnimate) {
            const timer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isReadyToAnimate]);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
        sessionStorage.setItem('portfolioLoaded', 'true');
        setTimeout(() => { ScrollTrigger.refresh(); }, 100);
    };

    const handleExitStart = () => {
        setIsInitialLoadingExit(true);
    };

    return (
        <>
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} onExitStart={handleExitStart} duration={2500} />}
            <motion.main
                initial={skipAnimation ? false : { opacity: 0, y: 40 }}
                animate={skipAnimation ? { opacity: 1, y: 0 } : (isReadyToAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 })}
                transition={{
                    duration: skipAnimation ? 0 : 1.4,
                    ease: skipAnimation ? "linear" : [0.16, 1, 0.3, 1],
                    opacity: { duration: skipAnimation ? 0 : 0.8 }
                }}
                className="relative overflow-x-clip will-change-transform will-change-opacity"
            >
                {/* HERO */}
                <div id="hero">
                    <HeroVisual />
                </div>

                <DeferredMount>
                    {/* ABOUT US / MISSION & VISION */}
                    <AboutUs />

                    {/* PROJECTS / WORK (Services) */}
                    <ProjectsSection />

                    {/* ACTUAL PROJECTS / SELECTED WORK */}
                    <SelectedWork />

                    {/* HOW WE WORK */}
                    <HowWeWork />

                    {/* WHY INFUSIONX */}
                    <WhyInfusionX />

                    {/* LEADERSHIP / TEAM */}
                    <AboutSection />

                    {/* WHAT CLIENTS SAY */}
                    <WhatClientsSay />

                    {/* CONTACT / CTA */}
                    <CTASection />
                </DeferredMount>
            </motion.main>
        </>
    );
}
