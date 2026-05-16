import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: '#6B7B5C',
          light: '#8A9B7C',
          dark: '#4A5640',
        },
        sand: '#E8E0D5',
        cream: '#F7F4F0',
        beige: '#D4C4A8',
        charcoal: '#3D3D3D',
        'warm-gray': '#7A7A6C',
        terracotta: '#C4785A',
        blush: '#D4A5A5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.08)',
        card: '0 2px 8px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        card: '8px',
      },
    },
  },
  plugins: [],
}
export default config
