const path = require('path');
const MODE = process.env.NODE_ENV || 'development';
const enabledSourceMap = (MODE === 'development');

module.exports = {
  mode: MODE,
  entry: {
    'index': [path.resolve(__dirname, 'client/src/js/index.jsx')]
  },
  output: {
    path: `${__dirname}/client/www`,
    filename: 'bundle.js'
  },
  devtool: enabledSourceMap ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react'
              ],
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: enabledSourceMap,
              importLoader: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: enabledSourceMap,
              plugins: [
                require('postcss-import'),
                require('autoprefixer')({grid: true, browsers: ['last 1 versions']}),
                require('postcss-assets')({loadPaths: ['./client/src/img/'], cachebuster: true, relative: './client/src/css/'}),
                require('css-declaration-sorter')({order: 'smacss'}),
                require('css-mqpacker'),
                require('cssnano'),
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            }
          },
        ]
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100 * 1024,
              name: './img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    require('stylelint-webpack-plugin')({fix: true})
  ],
  devServer: {
    contentBase: 'client/www',
    open: true
  }
};