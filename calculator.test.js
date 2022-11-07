import Calculator from './calculator.mjs';

describe("Calculator", () => { 
    let calculator;

    //Esto lo ejecuta antes de cada test
    beforeEach(() => {
        calculator = new Calculator();
    });

    
    describe("add", () => {
        it("should add two numbers", () => {
            expect(calculator.add(1, 2)).toBe(3);
        });
    });

    describe("subtract", () => {
        it("should subtract two numbers", () => {
            expect(calculator.subtract(2, 1)).toBe(1);
        });
    });

    describe("multiply", () => {
        it("should multiply two numbers", () => {
            expect(calculator.multiply(2, 2)).toBe(4);
        });
    });

    describe("divide", () => {
        it("should divide two numbers", () => {
            expect(calculator.divide(4, 2)).toBe(2);
        });

        /*it("should throw an error when dividing by zero", () => {
            expect(() => calculator.divide(4, 0)).toThrow();
        });*/
    });

    describe("isPrime", () => {
        it("should return true if the number is prime", () => {
            expect(calculator.isPrime(5)).toBe(true);
        });

        it("should return false if the number is not prime", () => {
            expect(calculator.isPrime(4)).toBe(false);
        });

    
    });
});
