
import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
    weight: ['300', '400', '500', '600'],
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
    weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
    title: {
        default: 'InfusionX | Digital Agency',
        template: '%s | InfusionX',
    },
    description: 'Building Intelligent Digital Products That Drive Growth',
    keywords: ['digital agency', 'web development', 'mobile apps', 'AI solutions', 'InfusionX'],
    authors: [{ name: 'InfusionX' }],
    creator: 'InfusionX',
    metadataBase: new URL('https://infusionx.com'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://infusionx.com',
        title: 'InfusionX | Digital Agency',
        description: 'Building Intelligent Digital Products That Drive Growth',
        siteName: 'InfusionX',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'InfusionX | Digital Agency',
        description: 'Building Intelligent Digital Products That Drive Growth',
        creator: '@infusionx',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/logo.svg', media: '(prefers-color-scheme: light)' },
            { url: '/logo-dark.svg', media: '(prefers-color-scheme: dark)' },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';
import { ChatBot } from '@/components/layout/ChatBot';
import { GlobalEffects } from '@/components/effects/GlobalEffects';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning className="dark">
            <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-black text-zinc-100 relative selection:bg-white/10 selection:text-white`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ArcPreloaderWrapper>
                                    <ConditionalNavigation>
                                        {children}
                                    </ConditionalNavigation>
                                </ArcPreloaderWrapper>
                                <ChatBot />
                                <GlobalEffects />
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
