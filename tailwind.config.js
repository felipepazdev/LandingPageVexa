/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#0A0A0A',
        tertiary: '#111111',
        accent: '#0DA3AD',
        accentLight: '#1ACBD6',
        accentGlow: '#0B8A92',
        accentDeep: '#066166',
        textDark: '#0A0A0A',
        textLight: '#FFFFFF',
        textMuted: '#A3A3A3',
        textDim: '#737373',
        cardDark: '#0A0A0A',
        border: '#1A1A1A',
        borderLight: '#262626',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(13, 163, 173, 0.12), transparent)',
        'blue-glow': 'radial-gradient(circle, rgba(13, 163, 173, 0.18), transparent 70%)',
        'grid-pattern': 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'card-gradient': 'linear-gradient(135deg, rgba(13, 163, 173, 0.05) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(13, 163, 173, 0.25)',
        'glow-blue-sm': '0 0 20px rgba(13, 163, 173, 0.18)',
        'glow-blue-lg': '0 0 80px rgba(13, 163, 173, 0.3)',
        'card-dark': '0 30px 60px rgba(0,0,0,0.8)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(13, 163, 173, 0.35)' },
          '50%': { opacity: '0.65', boxShadow: '0 0 50px rgba(13, 163, 173, 0.7)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
