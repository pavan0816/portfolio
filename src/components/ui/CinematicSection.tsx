'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CinematicSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  parallaxOffset?: number; // How much it moves on scroll
  staggerChildren?: boolean;
}

export const CinematicSection = ({
  children,
  className,
  id,
  delay = 0,
  parallaxOffset = 0,
  staggerChildren = false,
}: CinematicSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth out the parallax for a more premium feel
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(springProgress, [0, 1], [-parallaxOffset, parallaxOffset]);

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      filter: 'blur(10px)',
      scale: 0.98,
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
        when: "beforeChildren",
        staggerChildren: staggerChildren ? 0.15 : 0,
      }
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("relative overflow-hidden w-full", className)}
      style={parallaxOffset > 0 ? { y } : undefined}
    >
      {children}
    </motion.section>
  );
};
