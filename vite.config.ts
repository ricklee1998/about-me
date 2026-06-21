import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: /about-me/ · Vercel·로컬: /
const base = process.env.VITE_BASE ?? '/about-me/';

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
