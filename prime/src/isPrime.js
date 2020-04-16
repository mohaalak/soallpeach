function square (v) {
  return Math.floor(Math.sqrt(v)) + 2
}
function isPrime (s) {
  const value = parseInt(s)

  if (value === 2) {
    return '1'
  }
  if (value % 2 === 0) {
    return '0'
  }

  const squareRoot = square(value)
  for (let i = 3; i < squareRoot; i += 2) {
    if (value % i === 0) {
      return '0'
    }
  }

  return '1'
}
function createPrimes (n) {
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
  return primes
}

module.exports = { isPrime, createPrimes }
