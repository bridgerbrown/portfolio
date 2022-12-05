import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: index.html,
      name: pkg.name
    },
    rollupOptions: {
      input: {
        'entry-point-a': index.html,
      }
    }
  }
})
