module.exports = {
  entry: {
    index0: './src/index0.js'
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    open: true,
    openPage: 'index0.html'
  }
}