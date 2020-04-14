const Pool = require('worker-threads-pool')
const path = require('path')

const taskPath = path.resolve(path.resolve(__dirname, 'task.js'))

function multithread1 (threadCounts) {
  const pool = new Pool({ max: threadCounts })

  return function (data) {
    return new Promise((resolve, reject) =>
      pool.acquire(taskPath, { workerData: data }, (err, worker) => {
        if (err) {
          return reject(err)
        }
        worker.once('message', resolve)
        worker.once('error', reject)
      })
    )
  }
}
module.exports = multithread1
