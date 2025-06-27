import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-vishalp143-moviemania-dtfyvowz4ps.ws-us120.gitpod.io'
    ]
  }
})
