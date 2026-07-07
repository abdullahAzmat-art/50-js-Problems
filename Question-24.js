let newaarray = [];

function deeparray(arr){

    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            deeparray(arr[i])
        }else{
             newaarray.push(arr[i])
        }
    }
}
deeparray([1,2,[3,4],5,[6,7]])
console.log(newaarray)