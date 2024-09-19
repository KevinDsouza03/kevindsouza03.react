import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'olive': {
          DEFAULT: '#708238',
          light: '#6A9C89',
          dark: '#4A5D23',
        },
        'soft-black': '#1A1A1A',
        'creme': "#FFE5CF",
        'light-mint': '#E9EFEC',
        'mint': "#CDFADB",
      },
      spacing: {
        '100': '28rem',
        '104': '32rem'
      },
      fontFamily: {
        libre: ['Libre Baskerville', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInFast: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
        },  
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
      animation: {
        slide: 'slide 1s ',
        fadeIn: 'fadeIn 2.5s ease-in-out',
        fadeInFast: 'fadeIn 1s ease-in-out',
        slideInFromLeft: 'slideInFromLeft 1.5s ease-in-out',
        slideInFromRight: 'slideInFromRight 1.5s ease-in-out',
        slideInFromTop: 'slideInFromTop .5s ease-out forwards',
        typing: 'typing 2.5s steps(100, end) forwards, blink 1s infinite step-end',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ],
};

export default config;
