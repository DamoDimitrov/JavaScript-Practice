function same_number(x) {
    let num_str = String(x).split('');
    let sum = num_str.map(Number).reduce((a, b) => a + b);
    let f_num = num_str.shift();
    let result = true;


    num_str.forEach(e => {
        result = e === f_num;
    })
    return `${result}\n${sum}`
}

console.log(same_number(2));