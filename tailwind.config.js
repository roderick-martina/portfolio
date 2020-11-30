module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./**/*.js', './src/**/*.jsx'],
  },
  theme: {
    extend: {
      backgroundColor: {
        // primary: 'hsl(210,83%,53%)',
        primary: '#D0EAEC',
        black: 'hsl(0deg 0% 20%)',
      },
      textColor: {
        // primary: 'hsl(210,83%,53%)',
        primary: '#D0EAEC',
        black: 'hsl(0deg 0% 20%)',
      },
      borderColor: {
        // primary: 'hsl(210,83%,53%)',
        primary: '#D0EAEC',
        black: 'hsl(0deg 0% 20%)',
      },
      fontFamily: {
        app: ['proxima-nova', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
