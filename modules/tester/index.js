const run = (tests) => {
  const totalTests = tests.length

  let failed = 0
  let output = 'TAP version 13'

  output += `\n1..${totalTests}`

  for (let i = 0; i < totalTests; i++) {
    const result = tests[i]
    output += '\n' + result

    if (result.match(/^not/)) {
      failed++
    }
  }

  const passed = totalTests - failed
  const percentagePassed = ((passed / totalTests) * 100).toFixed(2)
  output += `\nFAILD tests ${failed}
Failed ${passed}/${totalTests}, ${percentagePassed}% okay`

  return output
}

const test = ({actual, expected, message = null}) => {
  const value = (typeof actual === 'function') ? actual() : actual
  const passed = value === expected

  let output = passed ? 'ok' : 'not ok'

  if (message) {
    output += ` ${message}`
  }

  if (output.match(/^not ok/)) {
    output += `\n ---
 message: "${message}"
 serverity: fail
 data:
   got:
     ${actual}
   expected:
     ${expected}
 ...
`
  }

  return output
}

module.exports = () => {
  return {
    run,
    test
  }
}
