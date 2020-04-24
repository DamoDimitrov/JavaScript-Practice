function squares_star(a) {
    let result = '';
    for(let i = 0; i < a; i++) {
        result += `${'* '.repeat(a).trim()}\n`;


    }
    return result;
}

console.log(squares_star(5))