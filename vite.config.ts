import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/vite-react-ts",
  root: './',  // Ensures Vite uses the root directory for serving
  build: {
    outDir: 'dist',  // Ensure this is where you want the build output
    rollupOptions: {
      input: 'index.html',  // Ensure it's pointing to the correct entry point
    }
  }
})
