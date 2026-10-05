"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export type PreloadPhase = "intro" | "text" | "done";
export const PreloadContext = React.createContext<{ isPreloading: boolean; phase: PreloadPhase }>({
  isPreloading: true,
  phase: "intro",
});
export const usePreloadState = () => React.useContext(PreloadContext);

export interface PremiumPageTransitionProps {
  children?: React.ReactNode;
}

export function PremiumPageTransition({ children }: PremiumPageTransitionProps) {
  const pathname = usePathname();
  const lenis = useLenis();

  // Initial load starts at "text" because overlay is already visible
  const [phase, setPhase] = React.useState<PreloadPhase>("text");
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Synchronously handle route change during render to prevent flash of new content
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsInitialLoad(false);
    // Bypass the text overlay delay on non-initial navigation
    setPhase("done");
  }

  // Defer rendering the NEW page until the screen is fully covered by the solid preloader.
  const isInitialSSR = React.useRef(true);
  const [renderedChildren, setRenderedChildren] = React.useState(children);

  React.useEffect(() => {
    isInitialSSR.current = false;
  }, []);

  React.useEffect(() => {
    // Update rendered page only when overlay is fully covering the screen or animation is done
    if (phase === "text" || phase === "done" || isInitialSSR.current) {
      setRenderedChildren(children);
    }
  }, [phase, children]);

  // Generate title from pathname
  const title = React.useMemo(() => {
    if (isInitialLoad) return "INFUSIONX";
    if (pathname === "/") return "HOME";

    const parts = pathname.split("/").filter(Boolean);
    if ((parts[0] === "projects" || parts[0] === "blog") && parts.length > 1) {
      return parts[1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
        .toUpperCase();
    }

    if (parts.length > 0) {
      return parts[0].toUpperCase();
    }
    return "LOADING";
  }, [pathname, isInitialLoad]);

  // Scroll lock and global event
  React.useEffect(() => {
    const isPreloading = phase !== "done";
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("preload-state-change", { detail: isPreloading }));
    }

    if (isPreloading) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.scrollTo(0, 0); // Force scroll to top while preloading
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (lenis) lenis.start();
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("preload-state-change", { detail: false }));
      }
    };
  }, [phase, lenis]);

  // Check initial load overrides (from session storage)
  React.useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      const isLoaded = sessionStorage.getItem("portfolioLoaded");
      if (!isLoaded) {
        // First load logic: do we want to ALWAYS run it? Yes, but if we don't, we can set phase to done.
        // Actually, the original ArcRevealHero had some logic for this. We'll skip forcing "done" to ensure
        // the user always sees the animation on hard refresh unless session storage is set and we WANT to skip.
        // For now, let's always show it on first load.
      }
    }
  }, [pathname]);

  // Phase: Intro -> Text
  React.useEffect(() => {
    if (phase !== "intro") return;

    const t = window.setTimeout(() => {
      setPhase("text");
    }, 500); // 0.5s for overlay to fade in completely

    return () => window.clearTimeout(t);
  }, [phase]);

  // Phase: Text hold -> Done
  React.useEffect(() => {
    if (phase !== "text") return;

    const holdTime = isInitialLoad ? 2500 : 1500;
    // Base time + stagger time based on title length (100ms per letter)
    const totalTextTime = 200 + title.length * 100 + 800 + holdTime;

    const t = window.setTimeout(() => {
      setPhase("done");
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem("portfolioLoaded", "done");
        } catch {}
      }
    }, totalTextTime);

    return () => window.clearTimeout(t);
  }, [phase, title, isInitialLoad]);

  const showOverlay = phase === "intro" || phase === "text";

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Apple-style spring easing
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      y: -20,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: [0.7, 0, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className="relative isolate min-h-screen w-full bg-background text-foreground">
      <PreloadContext.Provider value={{ isPreloading: showOverlay, phase }}>
        <motion.div 
          className="relative z-0 origin-top"
          initial={false}
          animate={{ opacity: phase === "done" ? 1 : 0.4, scale: phase === "done" ? 1 : 0.97 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          {renderedChildren}
        </motion.div>
      </PreloadContext.Provider>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="premium-overlay"
            initial={{ opacity: isInitialLoad ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black h-screen w-full overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {phase === "text" && (
                <motion.div
                  key={title}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex items-center justify-center overflow-hidden"
                >
                  {title.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={itemVariants}
                      className="text-[clamp(4rem,13vw,12rem)] font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-[#737373] to-[#e5e5e5] leading-none inline-block pb-2"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
