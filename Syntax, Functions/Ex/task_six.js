function speed(arr) {
    let area_limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    
    let speeding_msgs = {
        '20': "speeding",
        '40': "excessive speeding",
    }
    
    function speed_limit(arr) {
        let speed = arr[0];
        let area = arr[1];
        let msg = '';
        //TODO add one more object for the diff speedings containing diff msg
        if(speed > area_limits[area]) {
            if(speed - area_limits[area] <= 20) {
                msg = speeding_msgs['20'];
            } else if (speed - area_limits[area] <= 40) {
                msg = speeding_msgs['40']
            } else {
                msg = 'reckless driving'
            }
        }
        return msg;
    }

    return speed_limit(arr);
}

console.log(speed([40, 'city']));
console.log(speed([21, 'residential']));
console.log(speed([120, 'interstate']));
console.log(speed([200, 'motorway']));
