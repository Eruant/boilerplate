const curry = require('./curry')

const compose = (...args) =>
  (...rest) =>
    args.reverse().reduce((value, fn) => curry(fn)(value), ...rest)

module.exports = compose
