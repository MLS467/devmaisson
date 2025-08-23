import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // expõe para toda a rede
    port: 5173, // força a porta
    strictPort: true, // não muda se a porta estiver ocupada
  },
});
