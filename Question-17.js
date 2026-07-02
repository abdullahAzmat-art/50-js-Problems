function takeno(n){
    let sum = 0;
   for (let index = 0; index < n.toString().length; index++) {
         sum += n % 10;
         n = Math.floor(n / 10);
   }
   return sum;
}

console.log(takeno(1234))