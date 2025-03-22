const path = require("path");
const { ProvidePlugin } = require("webpack");
const flowbiteReact = require("flowbite-react/plugin/webpack");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
  },

  plugins: [
    new ProvidePlugin({
      React: "react",
    }),
    flowbiteReact(),
  ],
};
