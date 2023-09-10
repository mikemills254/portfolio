// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '425px', // Custom screen size for mobile devices
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
  corePlugins: {
    // ...
    // Use @layer utilities or @layer components as needed
    'form': ['@layer utilities'],
    'prose': ['@layer utilities'],
    // ...
  },
};
