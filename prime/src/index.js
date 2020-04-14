const isPrime = require('./isPrime')
const fs = require('fs')
const assert = require('assert')

function memoize1 (f) {
  const cache = {}

  return function (x) {
    if (cache[x]) {
      return cache[x]
    }

    cache[x] = f(x)
    return cache[x]
  }
}

function main () {
  const filePath = process.argv[2]

  assert(filePath, 'you sould provide a file')
  const memoizeIsPrime = memoize1(isPrime)
  const result = fs
    .readFileSync(filePath, { encoding: 'utf8' })
    .split('\n')
    .map(memoizeIsPrime)
    .join('\n')
  console.log(result)
}

main()
