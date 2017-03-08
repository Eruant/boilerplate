const server = require('./server')

const port = process.env.PORT || 5000
const myServer = server({
  routes: [
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
})

myServer.start(port)
  .then(() => {
    console.log(`Server started on port ${port}`)
  })
