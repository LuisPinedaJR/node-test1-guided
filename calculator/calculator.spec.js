// test('runs our first test', () => {
//   expect(1 + 1).toBe(2)
// })
const calculator = require('./calculator')

describe('calculator unit test', () => {
  it('adds', () => {
    expect(calculator.sum(2, 2)).toBe(4)
    expect(calculator.sum(3, 2)).toBe(5)
    expect(calculator.sum(1, 0)).toBe(1)
  })
  it('subtracts', () => {
    expect(calculator.difference(2, 2)).toBe(0)
    expect(calculator.difference(3, 2)).toBe(1)
    expect(calculator.difference(1, 0)).toBe(1)
    expect(calculator.difference(-1, 1)).toBe(-2)
    expect(calculator.difference(-1, -2)).toBe(1)
    expect(calculator.difference(1)).toBe(1)
    expect(calculator.difference()).toBe(0)
  })
  it('multiplies', () => {
    expect(calculator.product(2, 2)).toBe(4)
    expect(calculator.product(3, 2)).toBe(6)
    expect(calculator.product(1, 0)).toBe(0)
    expect(calculator.product(-1, 1)).toBe(-1)
    expect(calculator.product(1)).toBe(1)
    expect(calculator.product()).toBe(1)
  })
  it('divides', () => {
    expect(calculator.quotient(2, 2)).toBe(1)
    expect(calculator.quotient(3, 2)).toBe(1.5)
    expect(() => calculator.quotient(1, 0)).toThrow()
    expect(calculator.quotient(-1, 1)).toBe(-1)
    expect(calculator.quotient(1)).toBe(1)
    expect(calculator.quotient()).toBe(0)
  })
})
