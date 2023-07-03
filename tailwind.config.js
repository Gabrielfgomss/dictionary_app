/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['"Merriweather"', 'serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
      },
      keyframes: {
        pulsing: {
          '0%, 100%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(0.8)' },
        }
      },
      animation: {
        pulsing: 'pulsing 1s ease-in-out infinite',
      },
      gridTemplateColumns: {
        'auto-auto-fr': 'min-content min-content 1fr',
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('flowbite/plugin')],
};
