const tester = require('./index')

const {run, test} = tester()

const tests = [
  test({actual: 1, expected: 1, message: 'One should equal one'}),
  test({actual: 1, expected: 2, message: 'One should not equal two'}),
  test({actual: () => 4, expected: 4, message: 'Functions should call and return expected value'}),
]

const results = run(tests)

console.log(results)
