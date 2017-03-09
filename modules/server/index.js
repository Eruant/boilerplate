const http = require('http')
const router = require('./router')

const server = http.createServer()

module.exports = ({routes, port = 8080} = {}) => {
  const start = () => new Promise(
    (resolve, reject) => server.listen(port, () => resolve())
  )

  const stop = () => new Promise(
    (resolve, reject) => server.close(() => resolve())
  )

  router({server, routes})

  return {start, stop}
}
