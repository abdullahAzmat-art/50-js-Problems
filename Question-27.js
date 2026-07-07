function filterArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {

        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = [1, 2, 3, 4, 5];

let filteredArr = filterArray(arr, function(num) {
    return num % 2 === 0; // Filter even numbers
});

console.log(filteredArr)