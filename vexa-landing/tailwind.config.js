/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#070B14',
        secondary: '#08101E',
        tertiary: '#0D1828',
        accent: '#3B82F6',
        accentLight: '#60A5FA',
        accentGlow: '#1D4ED8',
        accentDeep: '#1E3A8A',
        textDark: '#0D0D12',
        textLight: '#F0F6FF',
        textMuted: '#8BA3C7',
        textDim: '#4A6080',
        cardDark: '#08101E',
        border: '#162035',
        borderLight: '#1E2D45',
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
        'hero-gradient': 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(59,130,246,0.12), transparent)',
        'blue-glow': 'radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)',
        'grid-pattern': 'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
        'card-gradient': 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(59,130,246,0.25)',
        'glow-blue-sm': '0 0 20px rgba(59,130,246,0.18)',
        'glow-blue-lg': '0 0 80px rgba(59,130,246,0.3)',
        'card-dark': '0 30px 60px rgba(0,0,0,0.6)',
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
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(59,130,246,0.35)' },
          '50%': { opacity: '0.65', boxShadow: '0 0 50px rgba(59,130,246,0.7)' },
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
