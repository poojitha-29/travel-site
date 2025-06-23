import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 👈 IMPORTANT: set to your GitHub repo name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
