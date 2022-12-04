module.exports = {
  plugins: [
    require("postcss-import")(),
    require("precss")({}),
    require("autoprefixer")({ grid: true }),
    require("postcss-simple-vars")({ silent: true }),
    require("postcss-nested")(),
  ],
};


