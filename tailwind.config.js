/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        pink: {
          50: '#FFF0F5',
          100: '#FFE1ED',
          200: '#FFC3DB',
          300: '#FFA5C9',
          400: '#FF77A9',
          500: '#FF4889',
          600: '#FF0080', // Dark pink
          700: '#D90073',
          800: '#B30062',
          900: '#8C0055',
          950: '#560033',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};