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

module.exports = { memoize1 }
