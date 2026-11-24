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
                background: '#050505',
                foreground: '#F2F4F7',
                card: {
                    DEFAULT: '#0D1117',
                    foreground: '#F2F4F7'
                },
                primary: {
                    DEFAULT: '#F2F4F7',
                    foreground: '#000000'
                },
                secondary: {
                    DEFAULT: '#0A0D12',
                    foreground: '#9CA3AF'
                },
                muted: {
                    DEFAULT: '#0A0D12',
                    foreground: '#6B7280'
                },
                accent: {
                    DEFAULT: '#3B82F6', // Electric blue accent
                    foreground: '#FFFFFF'
                },
                border: '#1A2028',
                ring: '#3B82F6',
                // Premium specific colors
                surface: {
                    50: '#050505',
                    100: '#0A0D12',
                    200: '#1A2028',
                },
                glow: {
                    primary: 'rgba(59, 130, 246, 0.1)',
                    accent: 'rgba(59, 130, 246, 0.15)',
                    subtle: 'rgba(59, 130, 246, 0.02)'
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
                'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%)',
                'noise': 'url("/noise.png")'
            },
            boxShadow: {
                'premium': '0 20px 40px -10px rgba(0,0,0,0.5)',
                'premium-hover': '0 30px 60px -15px rgba(0,0,0,0.7)',
                'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
                'glow-strong': '0 0 40px rgba(59, 130, 246, 0.3)'
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
