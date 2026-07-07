function myarr(arr , callback){

    let result = [];
    for (let i = 0; i < arr.length; i++) {
       
        result.push(callback(arr[i]))
    }
    return result;
}

let arr = [1,2,3,4,5]

let newarr = myarr(arr , function(num){
    return num * 2;
})

console.log(newarr)