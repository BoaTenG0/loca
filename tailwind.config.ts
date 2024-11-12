import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
import { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.2s ease-out infinite',
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans-serif font
        // mulish: ['var(--font-mulish)'],
        // poppins: 'Poppins',
        poppins: ['Poppins', 'sans-serif'],
      },

      fontWeight: {
        normal: '400', // Poppins normal weight
        medium: '500', // Poppins medium weight
        semibold: '600', // Poppins semi-bold weight
        bold: '700', // Poppins bold weight
        'extra-bold': '700', // Poppins bold weight
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem' }], // h1 size and line-height
        h2: ['1.875rem', { lineHeight: '2.25rem' }], // h2 size and line-height
        p: ['1rem', { lineHeight: '1.75rem' }], // paragraph size and line-height
      },

      colors: {
        logaGreenDeep: '#0E5340',
        locaGreen: '#199675',
        locaGreenLight: '#e8f5f1',
        logaTextGreen: '#0E5340',
        burningOrange: '#FA7D75',
        doveGray: '#747474',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#5750F1',
        loca8080: '#808080',
        stroke: '#E6EBF1',
        borderColor: '#D8D8D8CC',
        locaDeepGreen: '#0E5340',

        dark: {
          DEFAULT: '#111928',
          2: '#1F2A37',
          3: '#374151',
          4: '#4B5563',
          5: '#6B7280',
          6: '#9CA3AF',
          7: '#D1D5DB',
          8: '#E5E7EB',
        },
        gray: {
          DEFAULT: '#EFF4FB',
          dark: '#122031',
          1: '#F9FAFB',
          2: '#F3F4F6',
          3: '#E5E7EB',
          4: '#D1D5DB',
          5: '#9CA3AF',
          6: '#6B7280',
          7: '#374151',
        },
        green: {
          DEFAULT: '#22AD5C',
          dark: '#1A8245',
          light: {
            DEFAULT: '#2CD673',
            1: '#10B981',
            2: '#57DE8F',
            3: '#82E6AC',
            4: '#ACEFC8',
            5: '#C2F3D6',
            6: '#DAF8E6',
            7: '#E9FBF0',
          },
        },
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.locagri-heading': {
          fontSize: '1.125rem',
          color: '#054B81',
        },

        '.locagri-paragraph': {
          fontSize: '0.875rem',
          // color: '#212120',
        },
        '.locagri-sub-heading': {
          fontSize: '1rem',
          // color: '#000000',
        },
        '.locagri-link': {
          fontSize: '0.75rem',
          // color: '#212120',
        },
      }

      addUtilities(newUtilities)
    },
  ],
}
export default config
