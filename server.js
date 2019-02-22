const express = require('express')
const webpack = require('webpack')
const path = require('path')
const compression = require('compression')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use('/api', require('./api'))

// webpack-dev-middleware for serving webpack bundle witch custom server.
app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  )

  // webpack-hot-middleware for HMR.
  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000
    })
  )
  // serves react app
  app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, () =>
  console.log(`Server EndPoint Listening on port 3000 `)
)

module.exports = app
