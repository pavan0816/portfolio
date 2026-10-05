'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CinematicHoverProps {
  children: React.ReactNode;
  className?: string;
  enableMagnetic?: boolean;
  enableTilt?: boolean;
  tiltAmount?: number; // Higher number = less tilt
  magneticStrength?: number;
}

export const CinematicHover = ({
  children,
  className,
  enableMagnetic = true,
  enableTilt = true,
  tiltAmount = 20,
  magneticStrength = 0.2,
}: CinematicHoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for premium feel
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Tilt calculations based on mouse position
  const rotateX = useTransform(springY, [-100, 100], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(springX, [-100, 100], [-tiltAmount, tiltAmount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (-100 to 100 roughly depending on size)
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    if (enableMagnetic) {
      x.set(distanceX * magneticStrength);
      y.set(distanceY * magneticStrength);
    } else if (enableTilt) {
      x.set(distanceX);
      y.set(distanceY);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative perspective-1000", className)}
      style={{
        x: enableMagnetic ? springX : 0,
        y: enableMagnetic ? springY : 0,
        rotateX: enableTilt && isHovered ? rotateX : 0,
        rotateY: enableTilt && isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Light sweep effect */}
      {isHovered && (
        <motion.div 
          className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div 
            className="absolute -inset-[100%] opacity-30"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 60%)',
              transform: `translate(${x.get() * 0.5}px, ${y.get() * 0.5}px)`
            }}
          />
        </motion.div>
      )}
      
      {children}
    </motion.div>
  );
};
