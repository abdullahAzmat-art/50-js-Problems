function frequentelement(arr){
    let maxcount = 0
    let frequent = "";
    for (let i = 0; i < arr.length; i++) {
let count = 0;
for (let j = 0; j < array.length; j++) {
    if (arr[i]==arr[j]) {
        count++
    }
    
}
if (count >maxcount) {
    maxcount = count
    frequent = arr[i]
}
        
    }

    return {
        maxcount : maxcount , 
        frequent:frequent
    }
}


let array = ["apple" , "banana" , "apple" , "orange" , "orange" , "apple"]

let func = frequentelement(array)

console.log(func.frequent)
console.log(func.maxcount)