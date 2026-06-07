/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // 9-level verification nickname colors
        level: {
          1: 'transparent',
          2: '#C8CCD2',
          3: '#4DA3FF',
          4: '#30C97A',
          5: '#F5C542',
          6: '#FF8A3D',
          7: '#E3425F',
          8: '#9B6DFF',
          9: '#4B1FAF',
        },
      },
    },
  },
  plugins: [],
};
