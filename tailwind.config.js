// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
    './src/layouts/**/*.{js,ts,tsx}',
    './src/data/**/*.mdx',
  ],
  daisyui: {
    themes: ["light", "cupcake", "pastel", {
      custom: {
        "primary": "#EFBC30",
        "primary-content": "#0f172a",
        "secondary": "#A43817",
        "secondary-content": "#0f172a",
        "accent": "#bdb7da",
        "accent-content": "#0f172a",
        "neutral": "#3d4451",
        "neutral-content": "#3d4451",
        "base-100": "#1A1A1A",
        "base-content": "#FEF8F7",
        "info": "#60a5fa",
        "info-content": "#172554",
        "success": "#f6d860",
        "success-content": "#f6d860",
        "warning": "#37cdbe",
        "warning-content": "#37cdbe",
        "error": "#3d4451",
        "error-content": "#3d4451",
      },
    },],
  },
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {

      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['VremenaGroteskBook', ...fontFamily.sans]
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: theme('fontWeight.black'),
              fontSize: theme('fontSize.5xl'),
              letterSpacing: theme('letterSpacing.tight'),
              marginBottom: 0,
            },
            h6: {
              fontWeight: theme('fontWeight.bold'),
              fontSize: theme('fontSize.xl'),
              letterSpacing: theme('letterSpacing.wide'),
              marginBottom: 0,
            },
            p: {
              fontWeight: theme('fontWeight.thin'),
              letterSpacing: theme('letterSpacing.wide'),
            }
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('daisyui'),],
}
