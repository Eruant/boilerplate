const server = require('./server')

Promise.all([
  server()
])
  .then(() => {
    console.log('All tests pass')
  })
  .catch(reason => {
    console.error(reason)
  })
