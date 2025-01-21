import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Proxy API requests
        changeOrigin: true,
      },
      "/uploads": {
        target: "http://localhost:5000", // Proxy static file requests
        changeOrigin: true,
      },
    },
  },
});
