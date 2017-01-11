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
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      { enforce: 'pre', test: /\.scss$/, loader: 'sass-loader' },
      { test: /\.vue$/, loader: 'vue-loader', options: {
        loaders: {
          scss: 'style-loader!css-loader!sass-loader'
        }
      }},
      { test: /\.s?css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}

function createEntry(names) {
  const res = {}
  names.forEach(name => {
    res[name] = `./${name}/main.js`
  })
  return res
}
