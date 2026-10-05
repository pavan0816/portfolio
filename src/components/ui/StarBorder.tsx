"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType<any>;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

export function StarBorder({
  as,
  className = "",
  color = "#ff5500, #a855f7, #00f0ff, #ff5500",
  speed = "6s",
  children,
  ...props
}: StarBorderProps) {
  const Component: any = as || "div";
  return (
    <Component
      className={cn(
        "relative inline-block overflow-hidden rounded-3xl p-[1px] group transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Animated spinning star border gradient */}
      <div
        className="absolute -inset-[200%] animate-star-border pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, ${color})`,
          animationDuration: speed,
        }}
      />
      {/* Inner card surface */}
      <div className="relative z-10 w-full h-full rounded-[calc(1.5rem-1px)] bg-zinc-950/90 backdrop-blur-xl text-foreground">
        {children}
      </div>
    </Component>
  );
}
