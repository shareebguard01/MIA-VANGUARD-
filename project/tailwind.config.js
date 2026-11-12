/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0D12',
        midnight: '#0F172A',
        card: '#161F30',
        'card-light': '#1E2940',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E6C757',
          dark: '#A8861F',
        },
        cyan: {
          glow: '#22D3EE',
        },
        emerald: {
          glow: '#10B981',
        },
        slate: {
          body: '#94A3B8',
          light: '#CBD5E1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E6C757 50%, #D4AF37 100%)',
        'radial-gold': 'radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
