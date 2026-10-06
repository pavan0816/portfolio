'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { usePreloadState } from '@/components/ui/premium-page-transition';

const NAV_ITEMS = [
    { key: 'home', anchor: '#hero', label: 'HOME' },
    { key: 'about', anchor: '#about-us', label: 'ABOUT' },
    { key: 'services', anchor: '#projects', label: 'SERVICES' },
    { key: 'experience', anchor: '#experience', label: 'EXPERIENCE' },
    { key: 'projects', anchor: '#selected-work', label: 'PROJECTS' },
];

function smoothScrollTo(anchor: string) {
    const id = anchor.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (anchor === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

export function Navbar() {
    const t = useTranslations('navigation');
    const { resolvedTheme } = useTheme();
    const pathname = usePathname();
    const { scrollY } = useScroll();

    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [currentLocale, setCurrentLocale] = useState('en');
    
    const { isPreloading: isPreloadActive } = usePreloadState();
    const isDark = resolvedTheme === 'dark' || true;

    useEffect(() => {
        const locale = document.cookie.split('; ').find(row => row.startsWith('locale='))?.split('=')[1] || 'en';
        setCurrentLocale(locale);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (isMenuOpen) return;
        const direction = latest > lastScrollY ? 'down' : 'up';
        setIsScrolled(latest > 50);
        if (direction === 'down' && latest > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(latest);
    });

    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsMenuOpen(false), []);

    const toggleLocale = useCallback(() => {
        const newLocale = currentLocale === 'en' ? 'id' : 'en';
        document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
        setCurrentLocale(newLocale);
        window.location.reload();
    }, [currentLocale]);

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
        e.preventDefault();
        closeMenu();
        // If we're on the homepage, smooth-scroll. Otherwise, navigate to / first.
        if (pathname === '/') {
            smoothScrollTo(anchor);
        } else {
            window.location.href = '/' + anchor;
        }
    }, [pathname, closeMenu]);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: !isPreloadActive && (isVisible || isMenuOpen) ? 0 : -100, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-[100]"
            >
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-6">
                    <motion.div
                        className={cn(
                            'flex items-center justify-between transition-all duration-700',
                            isScrolled 
                              ? 'bg-[#020202]/80 backdrop-blur-md border border-white/5 rounded-full px-8 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
                              : 'py-2'
                        )}
                        layout
                    >
                        {/* LOGO */}
                        <a 
                            href="#hero" 
                            onClick={(e) => handleNavClick(e, '#hero')}
                            className="relative group min-w-[120px] flex items-center z-[110]"
                        >
                            <motion.img 
                                src={isDark ? '/logo-dark.svg' : '/logo.svg'} 
                                alt="InfusionX" 
                                className="h-6 md:h-8 w-auto object-contain" 
                            />
                        </a>

                        {/* DESKTOP NAV */}
                        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.key}
                                    href={item.anchor}
                                    onClick={(e) => handleNavClick(e, item.anchor)}
                                    className="relative group py-2 px-1"
                                >
                                    <span className="relative z-10 text-[10px] tracking-[0.2em] font-medium uppercase transition-all duration-500 text-[#8B8F98] group-hover:text-[#F2F2F2]">
                                        {item.label}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* DESKTOP CONTROLS */}
                        <div className="hidden lg:flex items-center gap-6 z-[110]">
                            <button
                                onClick={toggleLocale}
                                className="text-[10px] tracking-[0.15em] font-medium uppercase text-[#8B8F98] hover:text-[#F2F2F2] transition-colors duration-500 flex items-center gap-2"
                            >
                                <Globe className="w-4 h-4" />
                                EN
                            </button>
                            <a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, '#contact')}
                                className="px-6 py-2 rounded-full border border-[#1A1D22] text-[10px] tracking-[0.2em] font-medium uppercase text-[#F2F2F2] hover:border-[#F2F2F2] transition-all duration-500"
                            >
                                CONTACT
                            </a>
                        </div>

                        {/* MOBILE TOGGLE */}
                        <button
                            onClick={toggleMenu}
                            className="p-3 -mr-3 rounded-full text-white/70 hover:text-white transition-colors lg:hidden z-[110]"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isMenuOpen ? 'close' : 'menu'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </motion.div>
                </div>
            </motion.nav>

            {/* CINEMATIC MOBILE MENU */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0.2 } }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[90] lg:hidden bg-black flex flex-col justify-center items-center"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
                        
                        <nav className="flex flex-col items-center gap-8 w-full px-8 relative z-10">
                            {NAV_ITEMS.map((item, i) => (
                                <div key={item.key} className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: "-100%", opacity: 0 }}
                                        transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <a
                                            href={item.anchor}
                                            onClick={(e) => handleNavClick(e, item.anchor)}
                                            className="text-4xl sm:text-5xl font-display font-medium tracking-tight transition-colors uppercase text-white/20 hover:text-white"
                                        >
                                            {item.label}
                                        </a>
                                    </motion.div>
                                </div>
                            ))}
                        </nav>
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute bottom-12 left-0 right-0 flex justify-center"
                        >
                            <button
                                onClick={toggleLocale}
                                className="flex items-center gap-2 text-xs tracking-[0.2em] font-medium uppercase text-white/40 hover:text-white transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                {currentLocale === 'en' ? 'ENGLISH' : 'INDONESIA'}
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
