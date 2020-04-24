function circle_area(r) {
    let type = typeof(r);
    let result = 0;
    if(type === "number") {
        result = Math.PI * r ** 2;
    } else {
        return `We can not calculate the circle area, because we receive a ${type}.`;
    }
    return result.toFixed(2);
}

console.log(circle_area({a:5}));