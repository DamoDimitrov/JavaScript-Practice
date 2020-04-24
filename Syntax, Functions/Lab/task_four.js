function max_number(...params) {
    let a = params.reduce((a, b) => {
        return Math.max(a, b);
     }
     );
    return `The largest number is ${a}.`;
}

console.log(max_number(5, -3, 16));