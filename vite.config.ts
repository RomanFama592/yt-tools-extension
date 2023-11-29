import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    watch: {
      //use "usePolling: true" in case of using dev container, otherwise set to "false"
      usePolling: true
    }
  },
  plugins: [react()],
})
