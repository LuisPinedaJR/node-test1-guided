function sum(a = 0, b = 0) {
  return a + b
}

function difference(a = 0, b = 0) {
  return a - b
}
function product(a = 1, b = 1) {
  return a * b
}
function quotient(a = 0, b = 1) {
  if (b === 0) {
    throw new Error('Cannot divide by 0')
  }
  return a / b
}
module.exports = {
  sum,
  difference,
  product,
  quotient,
}
