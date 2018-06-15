const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'index': ["babel-polyfill", path.resolve(__dirname, 'client/index.js')]
  },
  output: {
    path: `${__dirname}/client/www`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};