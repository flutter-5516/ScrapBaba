import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/scrap': {
        target: 'https://scrap-baba-api.vercel.app',  // Your backend API URL
        changeOrigin: true,
        secure: false,  // Use this if the API doesn't support HTTPS (for development purposes)
        rewrite: (path) => path.replace(/^\/scrap/, ''),  // This removes the /scrap prefix from the URL
      },
    },
  },
})
