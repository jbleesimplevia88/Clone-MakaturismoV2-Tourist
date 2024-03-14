// tailwind.config.js

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // Small screens and up
        'md': '768px', // Medium screens and up
        'lg': '1024px', // Large screens and up
        'xl': '1280px', // Extra large screens and up
      },
      fontSize: {
        '2xl': '1.5rem', // 2xl font size
        '3xl': '1.875rem', // 3xl font size
      },
    },
  },
  plugins: [],
};
