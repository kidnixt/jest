
import Calculator from '../calculator';

describe('Calculator', () => {

  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('sum method adds two numbers correctly', () => {
    expect(calculator.sum(2, 3)).toBe(5);
  });

  test('power method throws an error when non-numeric arguments are provided', () => {
    expect(() => calculator.sum(2, '3')).toThrowError(
      'both arguments must be numbers'
    );
  });

  test('subtract method subtracts two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('multiply method multiplies two numbers correctly', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test('divide method divides two numbers correctly', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('divide method throws an error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrowError('dividing by zero is not allowed');
  });
});