import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For Netlify/Vercel/Custom domain: use base: '/'
  // For GitHub Pages with repo name 'portfolio': use base: '/portfolio/'
  base: '/',
})

