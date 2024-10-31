export default class Calculator {
  sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('both arguments must be numbers');
    }
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('dividing by zero is not allowed');
    }
    return a / b;
  }
}
