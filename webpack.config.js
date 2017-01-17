var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'views/app');

var config = {

  // entry file, the main app file
  entry: APP_DIR + '/index.jsx',

  // transpiled javascript file
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  // modules, defining that we are using jsx
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['lodash']
        }
      }
    ]
  }


};

module.exports = config;
