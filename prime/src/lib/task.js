const isPrime = require('../isPrime')
const { parentPort, workerData, isMainThread } = require('worker_threads')
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

const calc = arr => arr.map(memoize1(isPrime))
if (!isMainThread) {
  parentPort.postMessage(calc(workerData))
}
