'use client';

import dynamic from 'next/dynamic';

const CustomCursor = dynamic(
    () => import('@/components/effects/CustomCursor').then(mod => ({ default: mod.CustomCursor })),
    { ssr: false }
);

const ScrollProgress = dynamic(
    () => import('@/components/effects/ScrollProgress').then(mod => ({ default: mod.ScrollProgress })),
    { ssr: false }
);

export function GlobalEffects() {
    return (
        <>
            <CustomCursor />
            <ScrollProgress />
        </>
    );
}
