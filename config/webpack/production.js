// Note: You must restart bin/webpack-watcher for changes to take effect

var path    = require('path');
var webpack = require('webpack');
var merge   = require('webpack-merge');

var config = require('./shared.js');

module.exports = merge(config, {
  output: { filename: "[name]-[hash].js" },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: false,
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
      },
    })
  ]
});
