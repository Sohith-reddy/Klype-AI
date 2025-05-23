import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 12000,
    allowedHosts: [
      'work-1-ztzwgfesaacnvfnw.prod-runtime.all-hands.dev',
      'work-2-ztzwgfesaacnvfnw.prod-runtime.all-hands.dev'
    ],
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
