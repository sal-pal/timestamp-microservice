module.exports = {
  context: __dirname,
  entry: "./src/App.js",

  output: {
    filename: "app.js",
    path: __dirname
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react']
          }
        }
      ]
  }
}
