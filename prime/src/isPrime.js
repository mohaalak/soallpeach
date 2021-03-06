function square (v) {
  return Math.floor(Math.sqrt(v)) + 2
}
function isPrime (list) {
  const size = list.length
  return function (s) {
    const value = parseInt(s)

    if (value === 2) {
      return '1'
    }
    if (value % 2 === 0) {
      return '0'
    }

    const squareRoot = square(value)
    let prime = 3
    let index = 1
    while (prime < squareRoot) {
      if (value % prime === 0) {
        return '0'
      }
      prime = index < size ? list[++index] : prime + 2
    }

    return '1'
  }
}
function createPrimes (n) {
  const mark = []
  mark[0] = true
  mark[1] = true
  const list = []
  const obj = {}
  for (let i = 2; i < n; i++) {
    if (mark[i]) {
      continue
    }
    for (let j = i * 2; j < n; j += i) {
      mark[j] = true
    }
    list.push(i)
    obj[i] = '1'
  }
  return { list, obj }
}

module.exports = { isPrime, createPrimes }
