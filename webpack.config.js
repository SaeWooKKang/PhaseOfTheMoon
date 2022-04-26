const path = require("path");
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'basic-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: "./client/src/components/index"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets:["@babel/preset-env", "@babel/preset-react"],
          plugins:["@babel/plugin-transform-react-inline-elements"]
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', "sass-loader"]
      }
    ]
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],

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