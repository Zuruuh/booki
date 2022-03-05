const postcss = () => ({
  plugins: [
    require('autoprefixer')(),
    require('@fullhuman/postcss-purgecss')({
      content: ['./**/*.html', './**/*.ejs'],
    }),
  ],
});

module.exports = postcss;
