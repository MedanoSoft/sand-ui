var babelJest = require('babel-jest')
module.exports = {
  process: function(src, filename) {
    if (/\.(css|scss)$/.test(filename)) {
      return ''
    } else {
      return babelJest.process(src, filename)
    }
  }
}