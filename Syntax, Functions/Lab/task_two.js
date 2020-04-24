function solve(a, b, operator) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b
    };

    return operations[operator](a, b);
}

console.log(solve(3, 4, '+'));
console.log(solve(3, 4, '-'));
console.log(solve(3, 4, '*'));
console.log(solve(3, 4, '/'));
console.log(solve(3, 4, '%'));
console.log(solve(3, 4, '**'));