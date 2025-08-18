function fibonacciIterative(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(fibonacciIterative(10));

// Сохраняем два предыдущих числа и на каждой итерации вычисляем следующее.
// Это гораздо эффективнее рекурсии.
