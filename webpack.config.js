module.exports = {
  entry: {
    'example/example': './example/index.es6'
  },

  output: {
    filename: "[name].js"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}

