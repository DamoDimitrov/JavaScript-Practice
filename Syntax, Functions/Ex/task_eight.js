function solve(arr) {
    function val_checker(arr) {
        let x1 = arr[0];
        let y1 = arr[1];
        let x2 = arr[2];
        let y2 = arr[3];
        
        distance1 = `{${x1}, ${y1}} to {0, 0} is ${distance(x1, y1, 0, 0)}`;    
        distance2 = `{${x2}, ${y2}} to {0, 0} is ${distance(x2, y2, 0, 0)}`;    
        distance3 = `{${x1}, ${y1}} to {${x2}, ${y2}} is ${distance(x1, y1, x2, y2)}`;
        
        return `${distance1}\n${distance2}\n${distance3}`;
    }
    
    function distance(x1, y1, x2, y2) {
        let num = Math.sqrt(
            ((x2-x1) ** 2) + ((y2 - y1) ** 2)
        );
    
        return Number.isInteger(num)? 'valid':'invalid';
    }

    return val_checker(arr);
}

console.log(solve([3, 0, 0, 4]));
console.log(solve([2, 1, 1, 1]));