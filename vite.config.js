import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// Vite configuration for the car detailing website.
// - "base" must match your GitHub repository name for GitHub Pages deployment.
//   Change this if you fork the repo under a different name.
// - "react()" enables React support with SWC for faster builds.
// - "tailwindcss()" integrates TailwindCSS directly into the Vite pipeline.
export default defineConfig({
  base: '/car-detailing-website/',
  plugins: [react(), tailwindcss()],
})
