import { defineConfig } from 'vite';
import imagePresetsPlugin, { widthPreset } from 'vite-plugin-image-presets';
import imageMinifierPlugin from 'vite-plugin-imagemin';
import { createHtmlPlugin } from 'vite-plugin-html';
import checkerPlugin from 'vite-plugin-checker';
import { VitePWA as pwaPlugin } from 'vite-plugin-pwa';
import babelPlugin from 'vite-plugin-babel';

export default defineConfig({
  base: './',
  plugins: [
    checkerPlugin({ typescript: true }),
    pwaPlugin(),
    babelPlugin(),
    createHtmlPlugin({
      minify: true,
      entry: './assets/scripts/main.ts',
      inject: {
        data: {
          title: 'test',
          template: (template: string) =>
            `${__dirname}/templates/${template}.ejs`,
        },
      },
      template: './index.html',
    }),
    imagePresetsPlugin({
      thumbnail: widthPreset({
        class: 'img thumb',
        loading: 'lazy',
        widths: [48, 96],
        formats: {
          webp: { quality: 50 },
          jpg: { quality: 70 },
        },
      }),
    }),
    imageMinifierPlugin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
});
