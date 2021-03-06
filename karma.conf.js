var webpack = require('webpack');
module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      externals: {
          'jsdom': 'window',
          'cheerio': 'window',
          'react/lib/ExecutionEnvironment': true
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          },
          {test: /\.json$/, loaders: ['json']},
        ]
      }
    },
    browserify: {
        debug: true,
        configure: function(bundle) {
            bundle.exclude('react/lib/ReactContext');
        }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
