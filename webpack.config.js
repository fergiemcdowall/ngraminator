const path = require('path')
const pkg = require('./package.json')
const glob = require('glob')

module.exports = [
  // Generating browser version of ngraminator
  {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ngraminator.' + pkg.version + '.js',
      library: 'ngraminator'
    },
    devtool: 'none'
  },

  // Generating a latest browser version of ngraminator (same as latest version number)
  {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ngraminator.latest.js',
      library: 'ngraminator'
    },
    devtool: 'none'
  },

  // Generating test script for the browser
  {
    mode: 'production',
    entry: glob.sync('./test/test.js'),
    output: {
      path: path.resolve(__dirname, './test/sandbox'),
      filename: 'bundle.js'
    },
    node: {
      fs: 'empty'
    }
  }
]
