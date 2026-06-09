/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'dark-space': '#0A0A0A',
        'cyber-cyan': '#00F5FF',
        'neon-pink': '#FF00F5',
        'cosmic-white': '#FFFFFF',
        'stellar-gray': '#1A1A1A'
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        cyber: ['Orbitron', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular']
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
}

