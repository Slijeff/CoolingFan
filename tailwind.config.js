module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 1s linear infinite',
        'spin-medium': 'spin 0.5s linear infinite',
        'spin-fast': 'spin 0.1s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
