module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('@fullhuman/postcss-purgecss')({
      content: ['./**/*.html', './templates/**/*.ejs', './data/**/*.json'],
    }),
  ],
};
