import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Read an optional DEV_PROXY environment variable when starting the dev server.
// You can set DEV_PROXY to the deployed backend (for example https://cognicare-back.vercel.app)
// or leave it unset to proxy to localhost:5050 as before.
const devProxyTarget = process.env.DEV_PROXY || process.env.VITE_API_URL || 'http://localhost:5050'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3039,
    proxy: {
      '/api': {
        target: devProxyTarget,
        changeOrigin: true,
        secure: devProxyTarget.startsWith('https'),
      }
    }
  }
})
