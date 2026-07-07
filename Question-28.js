function reduce(arr, callback, initialValue) {
    let accumuator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumuator = callback(accumuator, arr[i]);
    }
    return accumuator;
}

let arr = [1, 2, 3, 4, 5];
let sum = reduce(arr, function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

