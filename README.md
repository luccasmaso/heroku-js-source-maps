### webpack
`devtool: 'source-map'`
- Generates source map file(s)

### package.json
`"heroku-postbuild": "webpack --config webpack.config.prod.js && rimraf ./**/*.js.map"`
- Deletes generated *.js.map file(s) after uploaded to Bugsnag
