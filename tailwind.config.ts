import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VISUAL DNA
        'bg-midnight': '#08102B',
        'accent-cyan': '#00FFFF',
        'accent-violet': '#6B46C1',
      },
      fontFamily: {
        sans: ['var(--font-inter)'], 
        mono: ['var(--font-fira-code)'],
      },
      keyframes: {
        digitalPulse: {
          '0%, 100%': { filter: 'hue-rotate(0deg)', opacity: '1' },
          '1%': { filter: 'hue-rotate(200deg)', opacity: '0.95' },
          '2%': { filter: 'hue-rotate(10deg)', opacity: '1' },
          '3%': { filter: 'hue-rotate(360deg)', opacity: '0.8' },
        },
      },
      animation: {
        'glitch-pulse': 'digitalPulse 40s infinite step-end',
      },
    },
  },
  plugins: [],
};
export default config;
