const path = require("path");

module.exports = {
  name: 'basic-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: "./components/App"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets:["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
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