let x = 2;

function square(num) {
    return num * num;
}
console.log(square(x));

function cube(num) {
    return num * num * num;
}   
console.log(cube(x));
console.log(cube(square(x)));
console.log(square(cube(x)));

function power(num, exp) {
    let result = 1; 
    for (let i = 0; i < exp; i++) {
        result *= num;
    }
    return result;
}
console.log(power(x, 4));
console.log(power(3, 3));

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }   
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }   
    return result;
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(7));

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(0));
console.log(fibonacci(1));  
console.log(fibonacci(15));
console.log(fibonacci(20));
console.log(factorial(10)); 
console.log(power(5, 3));
console.log(square(5));
console.log(cube(4));
console.log(power(2, 8));
console.log(factorial(6));
console.log(fibonacci(25));
console.log(power(7, 2));
console.log(square(10));
console.log(cube(3));
console.log(factorial(4));
console.log(power(3, 4));
console.log(fibonacci(12));
console.log(square(8));
console.log(cube(5));
console.log(power(4, 3));
console.log(factorial(8));
console.log(fibonacci(18));
console.log(square(12));
console.log(cube(6));
console.log(power(6, 2));
console.log(factorial(9));
console.log(fibonacci(22));
console.log(square(15));
console.log(cube(7));
console.log(power(8, 2));
console.log(factorial(3));
console.log(fibonacci(30));
console.log(square(20));
console.log(cube(8));
console.log(power(9, 2));
console.log(factorial(2));
console.log(fibonacci(5));
console.log(square(25));
console.log(cube(9));
console.log(power(10, 2));
console.log(factorial(1));
console.log(fibonacci(3));
console.log(square(30));
console.log(cube(10));
console.log(power(11, 2));
console.log(factorial(0));
console.log(fibonacci(4));  
console.log(square(35));
console.log(cube(11));
console.log(power(12, 2));
console.log(factorial(5));
console.log(fibonacci(7));
console.log(square(40));
console.log(cube(12));
console.log(power(13, 2));
console.log(factorial(6));
console.log(fibonacci(9));
console.log(square(45));
console.log(cube(13));
console.log(power(14, 2));
console.log(factorial(7));
console.log(fibonacci(11));
console.log(square(50));
console.log(cube(14));
console.log(power(15, 2));
console.log(factorial(8));
console.log(fibonacci(13));
console.log(square(55));
console.log(cube(15));
console.log(power(16, 2));
console.log(factorial(9));
console.log(fibonacci(14));
console.log(square(60));
console.log(cube(16));
console.log(power(17, 2));
console.log(factorial(10));
console.log(fibonacci(16));
console.log(square(65));
console.log(cube(17));
console.log(power(18, 2));  
console.log(factorial(11));
console.log(fibonacci(17));
console.log(square(70));
console.log(cube(18));  
console.log(power(19, 2));
console.log(factorial(12));
console.log(fibonacci(19));
console.log(square(75));