/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['36px', { lineHeight: '1.2', letterSpacing: '0' }],
        'h2': ['28px', { lineHeight: '1.3', letterSpacing: '0' }],
        'h3': ['24px', { lineHeight: '1.3', letterSpacing: '0' }],
        'base': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'caption': ['14px', { lineHeight: '1.4', letterSpacing: '0' }],
        'small': ['12px', { lineHeight: '1.4', letterSpacing: '0' }],
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        bounce: 'bounce 1.5s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};