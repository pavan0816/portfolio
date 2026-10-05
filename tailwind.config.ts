import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: '#000000', // Pure black
                foreground: '#F5F5F5', // Soft white
                card: {
                    DEFAULT: '#0A0A0A', // Deep charcoal
                    foreground: '#F5F5F5'
                },
                primary: {
                    DEFAULT: '#FFFFFF', // Pure white for primary actions
                    foreground: '#000000' // Black text on white
                },
                secondary: {
                    DEFAULT: '#111111',
                    foreground: '#A1A1AA'
                },
                muted: {
                    DEFAULT: '#111111',
                    foreground: '#71717A'
                },
                accent: {
                    DEFAULT: '#0EA5E9', // Highly controlled cyan accent
                    foreground: '#FFFFFF'
                },
                border: '#1F1F1F',
                ring: '#FFFFFF',
                // Premium specific colors
                surface: {
                    50: '#0A0A0A',
                    100: '#111111',
                    200: '#1A1A1A',
                },
                glow: {
                    primary: 'rgba(255, 255, 255, 0.1)',
                    accent: 'rgba(14, 165, 233, 0.15)',
                    subtle: 'rgba(255, 255, 255, 0.02)'
                }
            },
            fontFamily: {
                sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
                display: ['var(--font-display)', 'Space Grotesk', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'scale-in': 'scaleIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'slow-pan': 'slowPan 30s linear infinite',
                'float': 'float 8s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
                'reveal': 'reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                },
                slowPan: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '100% 100%' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' }
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' }
                },
                reveal: {
                    '0%': { clipPath: 'inset(0 100% 0 0)' },
                    '100%': { clipPath: 'inset(0 0 0 0)' }
                }
            },
            backgroundImage: {
                'premium-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
                'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.15), transparent 70%)',
                'noise': 'url("/noise.png")'
            },
            boxShadow: {
                'premium': '0 20px 40px -10px rgba(0,0,0,0.5)',
                'premium-hover': '0 30px 60px -15px rgba(0,0,0,0.7)',
                'glow': '0 0 20px rgba(14, 165, 233, 0.15)',
                'glow-strong': '0 0 40px rgba(14, 165, 233, 0.3)'
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
