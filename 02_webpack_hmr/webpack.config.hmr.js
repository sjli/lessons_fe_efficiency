module.exports = {
  entry: {
    index1: './src/index1.js'
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    open: true,
    openPage: 'index1.html',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}