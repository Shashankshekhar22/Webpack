const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/", // If a file is there in CDN then we need to mention that CDN path here
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg$)/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // reset ting the default size to 3kb from 8kb
          },
        },
      },
      // Read text file and give a string to read the file
      {
        test: /\.txt/,
        type: "asset/source",
      },
    ],
  },
};
