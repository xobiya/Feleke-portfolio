import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simple working configuration
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000
  }
})