module.exports = {
  plugins: {
    "postcss-import": {},
    autoprefixer: { browsers: ["> 1%", "last 2 versions"] },
    "postcss-nested": {},
    "postcss-preset-env": {
      browsers: "last 2 versions"
    }
  }
};
