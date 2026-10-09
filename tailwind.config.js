/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDFCF9',
          100: '#FBF9F5',
          200: '#F4EFE6',
          300: '#EBE3D5',
          400: '#DED3C0',
          500: '#C9BBA2',
        },
        gold: {
          50: '#FAF6EB',
          100: '#F3E9CD',
          200: '#E6D39B',
          300: '#D6B964',
          400: '#C8A33D',
          500: '#B38827',
          600: '#99701E',
          700: '#7A551A',
          800: '#634419',
          900: '#523717',
          metallic: '#C59A3C',
          champagne: '#D8C38B',
          warm: '#9E7724'
        },
        navy: {
          800: '#14253D',
          900: '#0C1829',
          950: '#060E1A',
        },
        slate: {
          850: '#172033',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Cinzel"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        garamond: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-luxury': '0 10px 30px -5px rgba(12, 24, 41, 0.05), 0 0 0 1px rgba(197, 154, 60, 0.12)',
        'soft-luxury-hover': '0 20px 40px -10px rgba(12, 24, 41, 0.08), 0 0 0 1px rgba(197, 154, 60, 0.3)',
        'gold-pill': '0 4px 14px 0 rgba(179, 136, 39, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
