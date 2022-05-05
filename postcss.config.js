// @ts-check
/// <reference path="./typings/postcss-rem2px.d.ts" />
/// <reference path="./typings/@fullhuman.postcss-purgecss.d.ts" />

module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('@fullhuman/postcss-purgecss')({
      content: ['./**/*.html', './templates/**/*.ejs', './data/**/*.json'],
    }),
    require('postcss-rem2px')({
      transformType: 'px',
      rootFontSize: 10,
    }),
  ],
};
