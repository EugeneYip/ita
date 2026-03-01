import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Keep relative asset paths for GitHub Pages/custom domain compatibility.
  base: "./",
});
