"use client";

import { PremiumPageTransition } from "@/components/ui/premium-page-transition";

export function ArcPreloaderWrapper({ children }: { children: React.ReactNode }) {
    return (
        <PremiumPageTransition>
            {children}
        </PremiumPageTransition>
    );
}
