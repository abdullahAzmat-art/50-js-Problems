function duplicateArray(arr) {
    let duplicatearray = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < duplicatearray.length; j++) {
            if (arr[i] === duplicatearray[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            duplicatearray.push(arr[i]);
        }
    }

    return duplicatearray;
}

console.log(duplicateArray([2, 3, 6, 2, 6])); // [2, 3, 6]