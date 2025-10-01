import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['speedy-unmutated-adriana.ngrok-free.dev'],
    hmr: {
      host: 'speedy-unmutated-adriana.ngrok-free.dev',
      protocol: 'wss',
      // clientPort: 443, // utile si nécessaire
    },
  }
})
