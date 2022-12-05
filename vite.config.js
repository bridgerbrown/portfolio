import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.html'),
      name: pkg.name
    },
    rollupOptions: {
      input: {
        'entry-point-a': path.resolve(__dirname, 'index.html'),
      }
    }
  }
})
