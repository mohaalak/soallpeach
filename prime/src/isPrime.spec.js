const isPrime = require('./isPrime')
describe('IsPrime', () => {
  test('2 is prime', () => {
    expect(isPrime('2')).toBe('1')
  })
  test('3 is prime', () => expect(isPrime('3')).toBe('1'))
  test('9 is not prime', () => expect(isPrime('9')).toBe('0'))
})
