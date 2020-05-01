const isNotEmptyString = x => x !== "";
const trimString = x => x.trim();

function deserialiseStr(str) {
    return str.split("|")
                .filter(isNotEmptyString)
                .map(trimString)
                .map(x => Number(x)? Math.floor(Number(x) * 100) / 100: x );
}

function solve(arr) {
    let keys = deserialiseStr(arr[0]);

    return arr
        .slice(1)
        .map(deserialiseStr)
        .map(x => x.reduce((a, b, i) => {
           a[keys[i]] = b;
           return a;
        }, {}));
}

console.log(
    solve([
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ])
);

console.log(
    solve([
        '| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |'
    ])
);