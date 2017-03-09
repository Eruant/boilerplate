const server = require('./modules/server')

const port = process.env.PORT || 5000
const routes = [
  {
    method: 'GET',
    url: '/',
    handler (request) {
      return {
        statusCode: 202,
        body: 'Hello world'
      }
    }
  },
  {
    method: 'GET',
    url: '/another',
    handler (request) {
      return 'Hello another world'
    }
  }
]

server({port, routes}).start()
  .then(() => {
    console.log(`Server started on port ${port}`)
  })
