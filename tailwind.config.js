/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'carving-outline-black': ['MADECarvingSoftOutline-Black', 'sans-serif'],
        'carving-outline-bold': ['MADECarvingSoftOutline-Bold', 'sans-serif'],
        'carving-outline-extra-light': ['MADECarvingSoftOutline-ExtraLight', 'sans-serif'],
        'carving-outline-light': ['MADECarvingSoftOutline-Light', 'sans-serif'],
        'carving-outline-medium': ['MADECarvingSoftOutline-Medium', 'sans-serif'],
        'carving-outline-regular': ['MADECarvingSoftOutline-Regular', 'sans-serif'],
        'carving-outline-semi-bold': ['MADECarvingSoftOutline-SemiBold', 'sans-serif'],
        'carving-outline-thin': ['MADECarvingSoftOutline-Thin', 'sans-serif'],
        'carving-black': ['MADECarvingSoft-Black', 'sans-serif'],
        'carving-bold': ['MADECarvingSoft-Bold', 'sans-serif'],
        'carving-extra-light': ['MADECarvingSoft-ExtraLight', 'sans-serif'],
        'carving-light': ['MADECarvingSoft-Light', 'sans-serif'],
        'carving-medium': ['MADECarvingSoft-Medium', 'sans-serif'],
        'carving-regular': ['MADECarvingSoft-Regular', 'sans-serif'],
        'carving-semi-bold': ['MADECarvingSoft-SemiBold', 'sans-serif'],
        'carving-thin': ['MADECarvingSoft-Thin', 'sans-serif'],
      },
      width: {
        '45': '45%',
        '80': '80%',
        '81': '81%',
      },
      maxHeight: {
        '80vh': '80vh',
      },
      screens: {
        'custom': '720px',
        'custom2': '840px',
        'custom3': '740px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};