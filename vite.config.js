import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist', // Ensure the output goes to the dist folder
    rollupOptions: {
      input: 'src/main.js', // Adjust if your entry file is different
    },
  },
});
