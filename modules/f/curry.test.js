const curry = require('./curry')
const add = (a, b) => a + b

module.exports = [
  {
    actual: () => curry(add, 1, 2),
    expected: 3,
    message: 'passing in all arguments should produce the correct result'
  },
  {
    actual: () => curry(add, 2)(4),
    expected: 6,
    message: 'passing in some arguments returns and function that will continue sum'
  },
  {
    actual: () => curry(add)(1)(3),
    expected: 4,
    message: 'passing in all arguments later works as expected'
  },
  {
    actual: () => curry(add)()(2)()(3),
    expected: 5,
    message: 'passing in empty arguments should not break flow'
  }
]
