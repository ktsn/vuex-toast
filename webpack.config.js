/* eslint-env node */
const path = require('path')

const vueExternal = {
  root: 'Vue',
  commonjs2: 'vue',
  commonjs: 'vue',
  amd: 'vue'
}

const vuexExternal = {
  root: 'Vuex',
  commonjs2: 'vuex',
  commonjs: 'vuex',
  amd: 'vuex'
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vuex-toast.js',
    library: 'VuexToast',
    libraryTarget: 'umd'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  externals: {
    vue: vueExternal,
    vuex: vuexExternal
  }
}
