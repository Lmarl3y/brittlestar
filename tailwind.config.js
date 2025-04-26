/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'wine-red': '#722F37',
        'wine-dark': '#441A22',
        'coffee': '#6F4E37',
        'cream': '#F5F5DC',
        'sand': '#E0C9A6',
        'ocean': '#5A8FA4',
        'sunset': '#FF9E7A',
        'night': '#2D3748',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
} 