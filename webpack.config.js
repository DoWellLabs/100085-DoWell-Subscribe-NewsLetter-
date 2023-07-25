module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "env",
            "react",
            ["@babel/preset-env", { targets: "defaults" }],
          ],
          plugins: ["transform-class-properties"],
        },
      },
    ],
  },
};
// ["env", "react", "@babel/preset-env", { targets: "defaults" }],
