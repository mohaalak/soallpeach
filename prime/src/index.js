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
  const { list, obj } = createPrimes(50000)
  filePromise
    .then(data => {
      const calcFunction = memoize1(obj, isPrime(list))

      return data
        .split('\n')
        .map(calcFunction)
        .join('\n')
    })
    .then(d => process.stdout.write(d))
}
main()
