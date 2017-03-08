const http = require('http')

const router = require('./router')

const server = http.createServer()

/*
server.on('request', (request, response) => {
  console.log(`${request.method}\t${request.url}`)
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  response.end('Hello world\n')
})
*/

const start = (port = '8080') => new Promise(
  (resolve, reject) => server.listen(port, () => resolve())
)

const stop = () => new Promise(
  (resolve, reject) => server.close(() => resolve())
)

module.exports = ({routes} = {}) => {
  router({server, routes})

  return {start, stop}
}
