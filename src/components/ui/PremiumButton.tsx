import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
}

export function PremiumButton({ href, onClick, children, className, withArrow = true }: PremiumButtonProps) {
  const content = (
    <motion.div
      whileHover="hover"
      initial="initial"
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden bg-white/5 border border-white/10 text-white font-medium text-sm md:text-base transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
        className
      )}
    >
      {/* Light sweep effect */}
      <motion.div
        variants={{
          initial: { x: "-100%", opacity: 0 },
          hover: { x: "100%", opacity: 0.3 }
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
      />
      
      <span className="relative z-10">{children}</span>
      
      {withArrow && (
        <motion.div
          variants={{
            initial: { x: 0 },
            hover: { x: 4 }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-10"
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white transition-colors" />
        </motion.div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
