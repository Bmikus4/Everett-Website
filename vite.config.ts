import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project site is served from /Everett-Website/.
  base: '/Everett-Website/',
  plugins: [react(), tailwindcss()],
})
