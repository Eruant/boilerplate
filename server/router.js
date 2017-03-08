module.exports = ({server, routes = []}) => {
  server.on('request', (request, response) => {
    for (let i = 0, len = routes.length; i < len; i++) {
      const route = routes[i]
      if (route.url === request.url && route.method.includes(request.method)) {
        try {
          const reply = route.handler(request)

          response.statusCode = reply.statusCode || 200
          response.headers = {
            'Content-Type': 'text/plain'
          }

          response.end(typeof reply === 'string' ? reply : reply.body || '')
        } catch (error) {
          response.writeHead(500, {
            'Content-Type': 'text/plain'
          })
          response.end('Internal server error')
          console.error(`Error with handler for the route: [${request.method}] ${request.url}`)
        }
        break
      }
    }

    response.writeHead(404, {
      'Content-Type': 'text/plain'
    })
    response.end('Page not found\n')
  })
}
