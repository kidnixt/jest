
export default class Calculator {
    add(a, b){
        return a + b;
    }

    subtract(a, b){
        return a - b;
    }

    multiply(a, b){
        return a * b;
    }

    divide(a, b){
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }

    //funcion con un if/else para comprobar si el numero es primo o no
    isPrime(n) {
        if (n < 2) {
            return false;
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    

}

