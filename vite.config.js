import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // REPLACE 'the-pact' WITH YOUR EXACT GITHUB REPOSITORY NAME IF IT IS DIFFERENT
  base: '/The-Pact/', 
})