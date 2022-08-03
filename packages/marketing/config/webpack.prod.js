const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: deps.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
