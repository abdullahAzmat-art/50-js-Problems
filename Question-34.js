function secondno(arr){
    let second = arr[0];
    let first = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (first < arr[i]) {
            second = first
           first = arr[i] 

        }else if (second < arr[i] && arr[i] != first) {
            second = arr[i]
            
        }
        
    }
    console.log(first)
    return second;

}

let arr = [2 ,4  ,5,6 ,2 ,6 , 6]

console.log(secondno(arr))