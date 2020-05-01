function solve(...params) {
    let result = 0;
    let steps = params[0];
    let footprint_length = params[1];
    let speed = params[2];

    let distance_km = steps * footprint_length;
    let rest_time = Math.floor(distance_km / 500) * 60;

    let walk_time = (distance_km / speed) * 3.6 + rest_time;

    let hours = Math.floor(walk_time / 3600);
    let str_hours = hours > 9? hours.toString():`0${hours}`;

    let minutes = Math.floor(walk_time / 60);
    let str_minutes = minutes > 9? minutes.toString():`0${minutes}`;

    let seconds = Math.round(walk_time - (hours * 3600) - (minutes * 60));
    let str_seconds = seconds > 9? seconds.toString():`0${seconds}`;

    result = `${str_hours}:${str_minutes}:${str_seconds}`;
    // console.log(seconds);
    return result;
}

console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));