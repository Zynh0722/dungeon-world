
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'nav': '900px',
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl') },
        'h2': { fontSize: theme('fontSize.3xl') },
        'h3': { fontSize: theme('fontSize.2xl') },
        'h4': { fontSize: theme('fontSize.xl') },
        'h1, h2, h3, h4': {
          paddingTop: theme('spacing.4'),
        },
        'blockquote': {
          paddingLeft: theme('spacing.4'),
          marginLeft: theme('spacing.1'),
          marginTop: theme('spacing.4'),
          marginBottom: theme('spacing.4'),
          borderLeft: theme('spacing[0.5]') + " solid",
          borderColor: theme('colors.neutral.400'),
        },
        'table': {
          margin: 'auto',
          textAlign: 'center',
          border: theme('spacing[0.5]') + " solid " + theme('colors.neutral.400'),
        },
        'td, th': {
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          border: theme('spacing[0.5]') + " solid " + theme('colors.neutral.400'),
        },
        'hr': {
          marginTop: theme('spacing.1'),
          marginBottom: theme('spacing.1'),
          borderColor: theme('colors.neutral.400')
        },
        ':not(blockquote) > p': {
          paddingTop: theme('spacing.2'),
          paddingBottom: theme('spacing.2'),
        },
        'ul': {
          listStyleType: 'disc',
        },
        'ol': {
          listStyleType: 'decimal',
        },
        'ul, ol': {
          paddingBottom: theme('spacing.2'),
          listStylePosition: 'inside',
        },
        'blockquote > * > a:link': {
          color: '#0000EE',
        },
        'blockquote > * > a:link:hover,\
         blockquote > * > a:visited:hover': {
          textDecoration: 'underline',
        },
        'blockquote > * > a:visited': {
          color: '#551A8B',
        },
      })
    }),
    function({ addComponents }) {
      addComponents({
        '.no-list-style': {
          listStyleType: 'none',
          paddingBottom: '0',
        }
      })
    },
  ],
}
