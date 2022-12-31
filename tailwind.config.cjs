/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: {
        ac1: '#243a73',
        ac2: '#090e34',
      },
      background: '#0F172A',
      sectionLight: 'rgba(172, 179, 202, 0.2)',
      sectionDark: 'rgba(172, 179, 202, 0.06)',
      muted: '#acb3ca',
      gray: '#f3f4f6',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      width: {
        10: '2.8125rem',
      },
      height: {
        10: '2.8125rem',
      },
      fontSize: {
        '2xl': '20px',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        blink: {
          '0%': { opacity: 0 },
          '50%': { opacity: 100 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        blink: 'blink 1.5s linear infinite',
        marquee: 'marquee 35s linear infinite',
        marquee2: 'marquee2 35s linear infinite',
      },
    },
  },
  variants: {
    animation: ['responsive'],
  },
  darkMode: 'class',
};
