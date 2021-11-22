const path = require('path')
const webpack = require("webpack")
const { BugsnagSourceMapUploaderPlugin, BugsnagBuildReporterPlugin } = require('webpack-bugsnag-plugins')

var PACKAGE = require('./package.json')
var version = PACKAGE.version

module.exports = function config() {
  return {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
      new BugsnagBuildReporterPlugin({ apiKey: process.env.BUGSNAG_API_KEY, appVersion: version,
        releaseStage: process.env.NODE_ENV,
        sourceControl: { provider: 'github-enterprise', repository: 'git', revision: process.env.SOURCE_VERSION }
      }),
      new BugsnagSourceMapUploaderPlugin({ apiKey: process.env.BUGSNAG_API_KEY, appVersion: version, publicPath: '*', overwrite: true }),
    ]
  }
}
