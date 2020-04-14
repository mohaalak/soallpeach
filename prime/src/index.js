const async = require('./lib/workerPool')
const fs = require('fs')
const assert = require('assert')
const os = require('os')
const R = require('ramda')

const threadCounts = os.cpus().length
const calcFunction = async(threadCounts)
const promiseAll = arr => Promise.all(arr)
const then = f => p => p.then(f)
const lines = arr => arr.map(x => x.join('\n')).join('\n')
const unlines = x => x.split('\n')
const partition = arr => R.splitEvery(arr.length / threadCounts, arr)

const start = R.pipe(unlines, partition, R.map(calcFunction), promiseAll, then(lines))

function main () {
  const filePath = process.argv[2]

  assert(filePath, 'you sould provide a file')

  const data = fs.readFileSync(filePath, { encoding: 'utf8' })
  start(data).then(console.log)
}

main()
