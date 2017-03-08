const http = require('http')
const assert = require('assert')
const server = require('../server')

const port = 3333

const serverRequest = () => new Promise((resolve, reject) => {
  const request = http.request({
    port,
    method: 'GET',
    hostname: 'localhost',
    path: '/'
  })

  request.end(() => {
    resolve()
  })
})

const routes = [
  {
    method: 'GET',
    url: '/',
    handler (request) {
      return 'Hello test route\t'
    }
  }
]

const myServer = server({routes})

module.exports = () => myServer.start(port)
  .then(serverRequest)
  .then(() => {
    myServer.stop()
  })
  .catch(error => {
    myServer.stop()
    assert.fail(error.message)
  })
