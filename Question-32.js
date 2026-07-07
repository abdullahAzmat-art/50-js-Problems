function checkarray(arr, arr1) {

    for (let i = 0; i < arr.length; i++) {
        if (arr.length !== arr1.length) {
            return false;
        }

        if (Array.isArray(arr[i]) && Array.isArray(arr1[i])) {
               
            if (!checkarray(arr[i], arr1[i])) {
                return false;
            }
        }else if(Array.isArray(arr1[i]) || Array.isArray(arr[i])){
              return false;
        }else if (arr[i] !== arr1[i]) {
            return false;   
        }

    }
    return true;
}

let arr = [1, 2, 3, [4, 5]];
let arr1 = [1, 2, 3, [4, 5]];

console.log(checkarray(arr, arr1));