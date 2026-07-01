
const largestNumber = (arr)=>{
let largest  = arr[0];
let min = arr[0];
   for (let i = 0; i < arr.length; i++) {
  
        if(largest < arr[i]){
            largest = arr[i]
        }else if(min >  arr[i]){
            min = arr[i];
        }
   }

   return {
    largest : largest,
    min : min
   };
      

}

 let arr = [2 ,4 ,3 ,8 ,3]
 
console.log(largestNumber(arr).largest) 
console.log(largestNumber(arr).min)