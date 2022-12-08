module.exports = {
  entry: "./js/main.js",
  output: {
    path: __dirname + "/build/js",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
