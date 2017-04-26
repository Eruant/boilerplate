const curry = require('./curry')
const compose = require('./compose')
const add = (a, b) => a + b
const double = (a) => a * 2
const add3 = curry(add, 3)

module.exports = [
  {
    actual: () => {
      return add3(2)
    },
    expected: 5,
    message: 'confirming curried add works'
  },
  {
    actual: () => compose(double, add3)(1),
    expected: 8,
    message: 'should compose functions together correctly'
  }
]
