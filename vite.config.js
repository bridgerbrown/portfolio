import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'portfolio-website/index.html',
      name: pkg.name
    },
    rollupOptions: {
      input: {
        'entry-point-a': 'portfolio-website/index.html',
      }
    }
  }
})
