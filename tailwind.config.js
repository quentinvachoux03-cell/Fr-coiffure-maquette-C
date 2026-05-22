/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Helvetica Neue', 'Helvetica', 'system-ui', 'sans-serif'],
      },
      colors: {
        'fr-orange': '#D94018',
        'fr-anth': '#3A3A3A',
        'fr-sand': '#efe5d6',
        'fr-forest': '#1c2a23',
        'fr-cream': '#f5ede0',
      },
    },
  },
  plugins: [],
};

