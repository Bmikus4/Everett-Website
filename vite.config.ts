import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Absolute base: deployed at the Vercel root domain, and client routes need
// assets served from /assets regardless of the current path.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
