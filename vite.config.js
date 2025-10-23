// vite.config.ts (hoặc .js)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  experimental: {
    enableNativePlugin: false, // 🔧 tránh lỗi rolldown native binding trên CI
  },
})
