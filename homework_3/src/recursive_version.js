function fibonacciRecursive(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10));



//Базовые случаи: fib(0) = 0, fib(1) = 1.
// Рекурсивно складываем два предыдущих числа.