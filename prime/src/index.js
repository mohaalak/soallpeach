const fs = require('fs')
const assert = require('assert')
const R = require('ramda')
const isPrime = require('./isPrime')
const { memoize1 } = require('./lib/utility')

const calcFunction = memoize1(isPrime)

const lines = R.join('\n')
const unlines = R.split('\n')

const start = R.pipe(unlines, R.map(calcFunction), lines)

function main () {
  const filePath = process.argv[2]

  assert(filePath, 'you sould provide a file')

  const data = fs.readFileSync(filePath, { encoding: 'utf8' })
  const result = start(data)
  console.log(result)
}

main()
