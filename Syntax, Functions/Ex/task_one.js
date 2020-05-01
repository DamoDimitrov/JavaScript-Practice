function task_one(...params) {
    let weight = (params[1] / 1000);
    let money = (params[2] * weight).toFixed(2);
    
    return `I need $${money} to buy ${weight.toFixed(2)} kilograms ${params[0]}.`;
}

console.log(task_one('apple', 1563, 2.35));