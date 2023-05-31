const AdvancedCalculator = require('../advancedCalculator');

describe('advancedCalculator', () => {

  let calculator;
  beforeEach(() => {
    calculator = new AdvancedCalculator();
  });

  test('power method calculates the power correctly', () => {
    expect(calculator.power(2, 3)).toBe(8);
  });

  test('power method throws an error when non-numeric arguments are provided', () => {
    expect(() => calculator.power(2, '3')).toThrowError(
      'both arguments must be numbers'
    );
  });

  //////////////////////////////////////////////////////////////////////////////////////////

  test('squareRoot method calculates the square root correctly', () => {

  });

  test('squareRoot method throws an error when a non-numeric argument is provided', () => {
    expect(() => calculator.squareRoot('16')).toThrowError(
      'argument must be a number'
    );
  });

  //////////////////////////////////////////////////////////////////////////////////////////

  test('isEven method checks if a number is even', () => {
    expect(calculator.isEven(4)).toBe(true);
    expect(calculator.isEven(0)).toBe(true);
  });

  test('isEven method throws an error when a non-numeric argument is provided', () => {
    expect(() => calculator.isEven('4')).toThrowError(
      'argument must be a number'
    );
  });

  //////////////////////////////////////////////////////////////////////////////////////////


});
