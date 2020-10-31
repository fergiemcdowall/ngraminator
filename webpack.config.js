const path = require('path')
const glob = require('glob')

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
