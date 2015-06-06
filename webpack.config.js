module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  devtool: 'source-map',

  module: {
    loaders: [{
      test: /.js$/,
      exclude: /node_modules(?!.*(\/js-csp))/,
      loader: 'babel-loader?optional=runtime'
    }]
  },
}
