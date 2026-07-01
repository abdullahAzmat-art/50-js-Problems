// Reverse a string


function reverseString(str){
     let reversestring = "";
    for (let index = str.length-1; index >= 0; index--) {
        reversestring += str[index];
        
    }
    return reversestring

}


 console.log(reverseString("hello"))  