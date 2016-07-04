module.exports = {
  devtool: 'inline-source-map',
  entry: './src/js/site/index.js',
  output: {
    filename: 'site.js',
    path: './dist/public'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};

