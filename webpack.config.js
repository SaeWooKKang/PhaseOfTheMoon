const path = require("path");

module.exports = {
  name: 'login-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: "./App"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets:["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  },

  output: {
    path: path.join(__dirname,"dist"),
    filename: "app.js",
    publicPath: "./dist",
  },

  devServer: {
    devMiddleware: {publicPath: "/dist"},
    static: { directory: path.resolve(__dirname)},
    hot: true,
  }
}