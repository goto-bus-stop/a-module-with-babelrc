var assert = require('assert')
var babel = require('babel-core')

babel.transformFile('./index.js', function (err) {
  assert(/configuration from babelrc files in dependencies should not be read/.test(err))
})
