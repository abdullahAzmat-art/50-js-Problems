function rotateno(arr  , n){

    let nm = 0
    for (let i = n; i < arr.length; i++) {
        
         for (let j = n-1; j >= nm; j--) {
            [arr[i]  , arr[j]] = [arr[j] , arr[i]]
            nm+1
         }
    }
    return arr
}

console.log(rotateno([1 ,2 ,4 ,5 ,6 , 7 ,9 ] , 3))

