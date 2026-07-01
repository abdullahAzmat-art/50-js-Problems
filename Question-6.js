
function factorial (num){
let fir = num;
    for (let i = num-1; i >= 1; i--) {
        
          fir *= i;

        
    }
    return fir;
}

console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))