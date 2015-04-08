module.exports = {
  entry: {
    'example/index': [
      'babel/polyfill',
      './example/index.es6'
    ]
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

