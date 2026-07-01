function sumarray(n){
    let sum=0;

    for (let index = 0; index < n.length; index++) {
        sum += n[index];
    }
    return sum;
}
let arr = [1,2,3,4,5]
console.log(sumarray(arr))