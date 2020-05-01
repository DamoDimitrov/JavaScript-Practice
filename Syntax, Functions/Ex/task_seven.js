function solve(arr) {
    let operations = {
        'chop': a => a / 2,
        'dice': a => Math.sqrt(a), 
        'spice': a => a + 1,
        'bake': a => a * 3,
        'fillet': a => a * 0.8
    }
    
    function cooking_numbers(arr) {
        let num = Number(arr.shift());
        let result = [];
        arr.forEach(e => {
            num = operations[e](num);
            result.push(num);
        });
        return result.join("\n");
    }
    return cooking_numbers(arr);
}

console.log(cooking_numbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']));
console.log("--------------------------");
console.log(cooking_numbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']));