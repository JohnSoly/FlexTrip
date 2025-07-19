// vite.config.ts (or .js)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import flowbiteReact from 'flowbite-react/plugin/vite'; // The correct import we found

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    flowbiteReact(),
  ],
});