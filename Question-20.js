function latten(arr){
    let newarray = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
           for (let j = 0; j < arr[i].length; j++) {
                newarray.push(arr[i][j])
           }
        }else{
            newarray.push(arr[i])
        }
    }
    return newarray
}

console.log(latten([1,2,[3,4],5,[6,7]]))