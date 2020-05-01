function speed_limit (arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i+=2) {
        obj[arr[i]] = Number(arr[i + 1]);
    }

    return obj;
}

console.log(speed_limit(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]))
console.log(speed_limit(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]))