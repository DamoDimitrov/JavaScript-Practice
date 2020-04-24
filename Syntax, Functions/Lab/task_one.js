function stringLength(...params) {
    let sum = params.reduce((a,b) => a + b.length, 0);
    let avg = sum / params.length;
    return`${sum} \n ${avg.toFixed(0)}`;
    
}

console.log(stringLength('chocolate', 'ice cream', 'cake'));