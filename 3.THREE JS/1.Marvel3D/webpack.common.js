const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: { main: "./src/index.js", vendor: "./src/vendor.js" , tilt:"./src/tilt.js"},
    output: {
      assetModuleFilename: "images/[hash][ext][query]",
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: path.resolve(__dirname, "./static") }],
      }),

    ],
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ["html-loader"],
        },
  
        {
          test: /\.(png|svg|jpg|gif)/,
          type: "asset/resource",
        },
      ],
    },
  };
  