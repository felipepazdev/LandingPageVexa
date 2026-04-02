/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#F4F6F8',
        tertiary: '#E8ECF0',
        accent: '#0DA3AD',
        accentLight: '#1ACBD6',
        accentGlow: '#0B8A92',
        accentDeep: '#066166',
        accentSoft: '#E6F7F8',
        textDark: '#0A0A0A',
        textLight: '#111111',
        textMuted: '#6B7280',
        textDim: '#9CA3AF',
        cardDark: '#FFFFFF',
        border: '#E5E7EB',
        borderLight: '#F3F4F6',
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
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(13, 163, 173, 0.08), transparent)',
        'cyan-glow': 'radial-gradient(circle, rgba(13, 163, 173, 0.12), transparent 70%)',
        'grid-pattern': 'linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)',
        'card-gradient': 'linear-gradient(135deg, rgba(13, 163, 173, 0.04) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(13, 163, 173, 0.2)',
        'glow-cyan-sm': '0 0 20px rgba(13, 163, 173, 0.15)',
        'glow-cyan-lg': '0 0 80px rgba(13, 163, 173, 0.25)',
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.1)',
        'card-lg': '0 8px 32px rgba(0,0,0,0.1), 0 32px 80px rgba(0,0,0,0.08)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.8)',
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
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(13, 163, 173, 0.25)' },
          '50%': { opacity: '0.75', boxShadow: '0 0 50px rgba(13, 163, 173, 0.5)' },
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
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
