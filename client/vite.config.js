import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
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
=======
    host: true,
    allowedHosts: [
      'work-1-kpdstgsdglteiogl.prod-runtime.all-hands.dev',
      'work-2-kpdstgsdglteiogl.prod-runtime.all-hands.dev'
    ],
    cors: true
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
  }
})
