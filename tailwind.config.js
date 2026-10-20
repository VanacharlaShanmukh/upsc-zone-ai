/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        atlas: {
          paper: '#F4EFE5',
          paperSecondary: '#EAE2D4',
          card: '#FFFDFA',
          border: '#DCD4C6',
          borderLight: '#ECE6DA',
          navy: '#14283F',
          navyDeep: '#101D2D',
          navyCard: '#172A3F',
          navyCardHover: '#1D334B',
          navyBorder: '#233952',
          terracotta: '#BF693D',
          terracottaDark: '#A6562E',
          terracottaLight: '#F7EFE9',
          terracottaBorder: '#E7BFA8',
          sage: '#78856A',
          sageLight: '#EFF2EB',
          sageDark: '#5E6B52',
          text: '#28323B',
          textMuted: '#68716F',
          textSubtle: '#8F9997',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'paper-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'atlas-sm': '0 1px 3px rgba(20, 40, 63, 0.05)',
        'atlas-md': '0 4px 14px -2px rgba(20, 40, 63, 0.08), 0 2px 6px -1px rgba(20, 40, 63, 0.04)',
        'atlas-lg': '0 12px 30px -4px rgba(20, 40, 63, 0.1), 0 4px 10px -2px rgba(20, 40, 63, 0.05)',
        'atlas-navy': '0 12px 32px -4px rgba(0, 0, 0, 0.35)',
      },
      letterSpacing: {
        editorial: '0.12em',
        coordinates: '0.18em',
      },
    },
  },
  plugins: [],
};
