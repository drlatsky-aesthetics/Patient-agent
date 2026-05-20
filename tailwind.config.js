/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D5A3',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#4A4A4A',
        },
        ivory: {
          DEFAULT: '#F7F4EE',
          dark: '#EDE9E1',
        },
        error: '#C0392B',
        success: '#2D6A4F',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        ui: ['Jost', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn: '6px',
      },
      boxShadow: {
        card: '0 2px 16px rgba(44,44,44,0.08)',
        'card-hover': '0 4px 24px rgba(44,44,44,0.14)',
      },
    },
  },
  plugins: [],
}
