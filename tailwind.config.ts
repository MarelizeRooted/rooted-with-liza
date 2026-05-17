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
        // Primary - Muted olive (rooted, natural)
        olive: {
          DEFAULT: '#6B7B5C',
          light: '#8A9B7C',
          dark: '#4A5640',
        },
        // Secondary - Soft sage green
        sage: '#9CAF88',
        // Warm earth tones
        sand: '#E8E0D5',
        stone: '#C9C0B1',
        linen: '#F5F1EB',
        cream: '#FAF8F5',
        beige: '#D4C4A8',
        // Text
        charcoal: '#3D3D3D',
        'warm-gray': '#7A7A6C',
        // Accents
        terracotta: '#C4785A',
        blush: '#D4A5A5',
        // Subtle gold accent - sparingly
        gold: '#B8956E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.06)',
        card: '0 2px 12px rgba(0, 0, 0, 0.05)',
        gentle: '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        card: '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'gentle-float': 'gentleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
