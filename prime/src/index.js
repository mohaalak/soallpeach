const fs = require('fs')
const assert = require('assert')
const isPrime = require('./isPrime')
const { memoize1 } = require('./lib/utility')

const calcFunction = memoize1(isPrime)

function main () {
  const filePath = process.argv[2]

  const outputPath = process.argv[3]
  assert(filePath, 'you sould provide a file')

  const data = fs
    .readFileSync(filePath, { encoding: 'utf8' })
    .split('\n')
    .map(calcFunction)
    .join('\n')

  if (outputPath) {
    fs.writeFileSync(outputPath, data)
  } else {
    process.stdout.write(data)
  }
}
main()
