module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
  corePlugins: {

    'form': ['@layer utilities'],
    'prose': ['@layer utilities'],
  },
}
