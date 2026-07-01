function calfunction(n){
    let first  = n[0];
    let second = n[0];
    for (let index = 0; index < n.length; index++) {
          if (first < n[index]) {
            first = n[index];
          }else if(second < n[index] && n[index] != first){
            second = n[index];
          }
    }
    return { first, second };
}

console.log(calfunction([2 ,4 ,23 ,5 ,7 ,4]).first)
console.log(calfunction([2 ,4 ,23 ,5 ,7 ,4]).second)