import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',           // Simula el navegador
    globals: true,                  // Permite usar describe/it/expect de manera global
    setupFiles: './src/setupTests.js' // Archivo de configuracion de tests
  }
})