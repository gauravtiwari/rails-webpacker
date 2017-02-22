// Note: You must restart bin/webpack-watcher for changes to take effect

var path = require('path');
var glob = require('glob');
var extname = require('path-complete-extname');
var distPath = process.env.WEBPACK_DIST_PATH;

if (distPath === undefined) {
  distPath = 'packs'
}

var config = {
  entry: glob.sync(path.resolve('app', 'javascript', 'packs', '*.js*')).reduce(
    function(map, entry) {
      basename = path.basename(entry, extname(entry))
      map[basename] = path.resolve(entry);
      return map;
    }, {}
  ),

  output: { filename: '[name].js', path: path.resolve('public', distPath) },

  module: {
    rules: [
      { test: /\.coffee(.erb)?$/, loader: 'coffee-loader' },
      {
        test: /\.jsx?(.erb)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',  ['latest', { 'es2015': { 'modules': false } }],
            ['env', { "modules": false }],
          ],
        }
      },
      {
        test: /\.erb$/,
        enforce: 'pre',
        loader: 'rails-erb-loader',
        options: {
          runner:  'bin/rails runner'
        }
      },
      {
        test: /\.sass$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },

  plugins: [],

  resolve: {
    alias: {
      'ie': 'component-ie',
    },

    extensions: [ '.js', '.coffee' ],
    modules: [
      path.resolve('app/javascript'),
      path.resolve('node_modules')
    ]
  },

  resolveLoader: {
    modules: [ path.resolve('node_modules') ]
  }
}

module.exports = {
  distPath: distPath,
  config: config
}
