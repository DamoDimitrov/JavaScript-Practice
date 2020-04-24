function to_upper(str) {
    return str.match(/\w+/gim)
        .map(w => w.toUpperCase())
        .join(", ");
}

console.log(to_upper('Hi, how are you?'));