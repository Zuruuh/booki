import { defineConfig } from 'vite';
import imagePresetsPlugin, { widthPreset } from 'vite-plugin-image-presets';
import imageMinifierPlugin from 'vite-plugin-imagemin';
import { createHtmlPlugin } from 'vite-plugin-html';
import checkerPlugin from 'vite-plugin-checker';
import babelPlugin from 'vite-plugin-babel';
import fontsPlugin from 'vite-plugin-fonts';
import { resolve } from 'path';

import type { Breakpoint } from './typings';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@images': resolve(__dirname, 'assets', 'images'),
    },
  },
  plugins: [
    checkerPlugin({ typescript: true }),
    babelPlugin(),
    createHtmlPlugin({
      minify: true,
      entry: './assets/scripts/main.ts',
      inject: {
        data: {
          template: (template: string): string =>
            `${__dirname}/templates/${template}.ejs`,
          data: (json: string): unknown =>
            require(`${__dirname}/data/${json}.json`),
          image: (collection: string, image: string, size: Breakpoint = 'md') =>
            `./assets/images/${collection}/${size}/${image}`,
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
    fontsPlugin({
      custom: {
        families: [
          {
            name: 'Raleway',
            local: 'Raleway',
            src: './assets/fonts/Raleway-*.ttf',
          },
        ],
        preload: true,
      },
    }),
  ],
});
