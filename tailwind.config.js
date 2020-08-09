const defaultTheme = require('tailwindcss/defaultTheme');
/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      lineHeight: theme => theme('spacing'),
      colors: {
        grayLight: defaultTheme.colors.gray['200'],
        nuxt: '#00c58e',
        primary: defaultTheme.colors.indigo['700'],
        primaryLight: defaultTheme.colors.indigo['100'],
        tailwind: defaultTheme.colors.teal['600'],
        textPrim: defaultTheme.colors.gray['700'],
        textSecon: defaultTheme.colors.gray['600'],
        textTerc: defaultTheme.colors.gray['800'],
        rollup: '#aa1e1e',
        vue: '#4fc08d',
        webpack: '#8dd6f9',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      width: {
        content: '640px',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
