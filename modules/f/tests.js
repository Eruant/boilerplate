const curryTest = require('./curry.test.js')
const composeTest = require('./compose.test.js')

const test = ({actual, expected, message}) => {
  const output = {
    message,
    expected
  }

  try {
    output.actual = actual()
    output.passed = output.actual === expected
  } catch (error) {
    output.passed = false
    output.crash = error.message
  }

  return output
}

const tests = tests => {
  const results = tests.map(test)
  const passes = results.filter(result => result.passed)
  const fails = results.filter(result => !result.passed)

  console.log(`${passes.length}/${results.length} passed`)

  if (fails.length > 0) {
    fails.forEach(result => {
      console.error(result.message)
      if (result.crash) {
        console.error(`Test threw: ${result.crash}`)
      } else {
        console.error(`Actual: ${result.actual}`)
        console.error(`Expected: ${result.expected}`)
      }
    })
  }
}

tests([...curryTest, ...composeTest])
