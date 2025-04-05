import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  base: "/xescomerce/", 
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets')
    },
  },
})