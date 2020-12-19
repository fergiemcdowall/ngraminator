const path = require('path')
const glob = require('glob')
const webpack = require('webpack')

module.exports = [
  // Generating browser version of ngraminator
  {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ngraminator.js',
      library: 'ngraminator'
    },
    devtool: 'hidden-source-map'
  },

  // Generating test script for the browser
  {
    mode: 'production',
    entry: glob.sync('./test/test.js'),
    output: {
      path: path.resolve(__dirname, './test/sandbox'),
      filename: 'bundle.js'
    },
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/')
      }
    },
    node: {
      global: true,
      __filename: false,
      __dirname: false
    },
    plugins: [
      // fix "process is not defined" error:
      new webpack.ProvidePlugin({
        process: 'process/browser'
      })
    ]
  }
]
