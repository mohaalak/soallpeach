const fs = require('fs')
const assert = require('assert')
const isPrime = require('./isPrime')
const { memoize1 } = require('./lib/utility')
const util = require('util')
const generatePrimeNumbers = require('./primeNumbers')

const promiseReadfile = util.promisify(fs.readFile)

function main () {
  const filePath = process.argv[2]

  assert(filePath, 'you sould provide a file')

  const filePromise = promiseReadfile(filePath, { encoding: 'utf8' })
  const primesPromise = generatePrimeNumbers(1000000)
  Promise.all([filePromise, primesPromise])
    .then(([data, primeNumbers]) => {
      const calcFunction = memoize1(primeNumbers, isPrime)

      return data
        .split('\n')
        .map(calcFunction)
        .join('\n')
    })
    .then(console.log)
}
main()
