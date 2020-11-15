module.exports = {
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
        primary: 'hsl(210,83%,53%)',
      },
      textColor: {
        primary: 'hsl(210,83%,53%)',
      },
      borderColor: {
        primary: 'hsl(210,83%,53%)',
      },
      fontFamily: {
        app: ['proxima-nova', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}