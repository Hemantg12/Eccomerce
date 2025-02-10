import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://eccomerce-backend-w3fx.onrender.com",
      //changeOrigin: true,
    },
  },
  plugins: [react()],
});
