function checkmissingno(arr){
    let exacttotal = 0
    for (let i = 0; i <= arr.length+1; i++) {
        exacttotal +=i 
    }
console.log(exacttotal)
    let totalinarray = 0
    for (let i = 0; i < arr.length; i++) {
    totalinarray += arr[i]
        
    }
    console.log(totalinarray)
    let findmissingno =   exacttotal-totalinarray
    let missarr = arr
    missarr.push(findmissingno)
    sortarr = missarr.sort((a,b)=>a-b)
    return sortarr
}

let array = [1 ,2 ,4, 5]
console.log(checkmissingno(array))