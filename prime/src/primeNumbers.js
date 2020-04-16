const { isMainThread, parentPort, Worker, workerData } = require('worker_threads')

if (isMainThread) {
  module.exports = function generatePrimeNumbersTo (n) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: n
      })

      worker.on('message', resolve)
      worker.on('error', reject)
      worker.on('exit', code => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`))
      })
    })
  }
} else {
  const n = workerData
  const mark = []
  mark[0] = true
  mark[1] = true
  const primes = {}
  for (let i = 2; i < n; i++) {
    if (mark[i]) {
      continue
    }
    for (let j = i * 2; j < n; j += i) {
      mark[j] = true
    }
    primes[i + ''] = '1'
  }

  parentPort.postMessage(primes)
}
