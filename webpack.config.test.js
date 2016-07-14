/* eslint-env node */
const path = require('path')
const glob = require('glob')

const conf = require('./webpack.config')

conf.debug = true
conf.devtool = 'source-map'

conf.context = path.resolve(__dirname)
conf.entry = glob.sync('./test/**/*.js')
conf.output = {
  path: path.resolve(__dirname, '.tmp'),
  filename: 'test.js'
}

module.exports = conf
