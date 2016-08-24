/* eslint-env node */
const path = require('path')

module.exports = {
  entry: createEntry(['basic']),
  output: {
    path: __dirname,
    filename: '[name]/__build__.js'
  },
  resolve: {
    alias: {
      'vuex-toast': path.resolve(__dirname, '../src/index.js')
    },
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  }
}

function createEntry(names) {
  const res = {}
  names.forEach(name => {
    res[name] = `./${name}/main.js`
  })
  return res
}
