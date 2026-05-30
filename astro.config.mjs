import { defineConfig } from 'astro/config';

export default defineConfig({
  // Output static HTML for HostGator compatibility
  output: 'static',
  
  // Build optimizations
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
      terserOptions: {
        compress: {
          drop_console: false,
        },
      },
    },
    ssr: {
      external: ['svgo'],
    },
  },

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
