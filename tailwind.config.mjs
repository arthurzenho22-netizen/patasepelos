/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f7f9f4',
          100: '#e9ede0',
          200: '#d4dcbe',
          300: '#bfc99c',
          400: '#a9b57a',
          500: '#9ab08c',
          600: '#7d9b6f',
          700: '#657f5c',
          800: '#4c6248',
          900: '#384934',
          950: '#1f2d1a',
        },
        cream: {
          50: '#fdfcf5',
          100: '#fbf7e7',
          200: '#f9f2d9',
          300: '#f7edcb',
          400: '#f5e8bd',
          500: '#f3e3af',
          600: '#d9c78f',
          700: '#bfac7a',
          800: '#a69166',
          900: '#8c7751',
        },
        terracotta: {
          50: '#fdf2ef',
          100: '#fbe4e0',
          200: '#f9ccc8',
          300: '#f7b4ae',
          400: '#f59c94',
          500: '#f3847a',
          600: '#dc7067',
          700: '#c45d54',
          800: '#ac4a41',
          900: '#94382f',
        },
        whatsapp: {
          500: '#25D366',
          600: '#1FB65B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}