const fs = require('fs')
const assert = require('assert')
const { isPrime, createPrimes } = require('./isPrime')
const { memoize1 } = require('./lib/utility')
const util = require('util')

const promiseReadfile = util.promisify(fs.readFile)
function main () {
  const filePath = process.argv[2]

  assert(filePath, 'you sould provide a file')

  const filePromise = promiseReadfile(filePath, { encoding: 'utf8' })
  const primeNumbers = createPrimes(50000)
  filePromise
    .then(data => {
      const calcFunction = memoize1(primeNumbers, isPrime)

      return data
        .split('\n')
        .map(calcFunction)
        .join('\n')
    })
    .then(console.log)
}
main()
