'use client';

import dynamic from 'next/dynamic';

const ParticleField = dynamic(
    () => import('@/components/effects/ParticleField').then(mod => ({ default: mod.ParticleField })),
    { ssr: false }
);

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
            <ParticleField />
            <CustomCursor />
            <ScrollProgress />
        </>
    );
}
