import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],

    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "./src/styles/variables.scss";`,
          },
        },
      },
      resolve: {
        alias: {
          'swiper/swiper-bundle.min.css': 'swiper/swiper-bundle.css',
        },
      },
});
