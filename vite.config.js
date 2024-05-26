import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.0.106', // Listen on all addresses, including LAN
    port: 3000,      // Specify the port, default is 3000
    strictPort: true // If true, exits the process if the port is already in use
  }
})
