import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    screens: {
      sm: '300px',
      md: '1000px', //868
      lg: '1406px',
      xl: '1750px',
    },
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        gray100: 'hsl(0,0% ,97% )',
        textgray: 'hsl(120, 1%, 37%)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
