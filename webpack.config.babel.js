const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'index': [path.resolve(__dirname, 'client/index.js')]
  },
  output: {
    path: `${__dirname}/client/www`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }]]
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};