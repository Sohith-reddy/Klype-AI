import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {

    host: true,
    allowedHosts: [
      'work-1-kpdstgsdglteiogl.prod-runtime.all-hands.dev',
      'work-2-kpdstgsdglteiogl.prod-runtime.all-hands.dev'
    ],
    cors: true
  }
})
