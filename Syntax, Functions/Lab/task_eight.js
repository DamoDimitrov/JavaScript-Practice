function aggregate(arr) {
    return [
        arr.reduce((a, b) => a + b, 0),
        arr.reduce((a, b) => a + 1 / b, 0),
        arr.join('')
    ].join("\n");
}
console.log(aggregate([1, 2, 3]));