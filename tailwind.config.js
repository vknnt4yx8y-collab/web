/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#DC143C',
          dark: '#8B0000',
          medium: '#B22222',
        },
        obsidian: {
          DEFAULT: '#1A1A1A',
          dark: '#0A0A0A',
          light: '#2A2A2A',
        },
        soul: {
          brown: '#5C4033',
          tan: '#8B7355',
        },
        ember: {
          DEFAULT: '#FF4500',
          light: '#FF6347',
          bright: '#FFA500',
        },
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px #FF4500, 0 0 10px #FF4500' },
          '50%': { boxShadow: '0 0 20px #FF4500, 0 0 40px #FF4500' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(100%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
