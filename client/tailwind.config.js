module.exports = {
  purge: {
    content: ['./pages/**/*.tsx', './components/**/*.tsx']
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto'
        ]
      },
      colors: {
        primary: '#002856',
        secondary: '#56AE5A'
      },
      textColor: {
        primary: '#002856',
        secondary: '#56AE5A'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
