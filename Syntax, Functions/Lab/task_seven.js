function solve(d) {
    days = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7,
    };
    
    function day(day) {
        return days[day] === undefined? "error":days[day];
    }

    return day(d);
}

console.log(solve("a"));
console.log(solve("Monday"));
console.log(solve(7));