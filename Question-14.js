function checkanagram(str1, str2) {
    let falge = false
    for (let i = 0; i < str1.length; i++) {
       for (let j = 0; j < str2.length; j++) {
            // act cat
             if(str1[i] === str2[j]){
                 falge = true
                 break;
             }else{
                falge = false
             }
             
       }
        
    }
    return falge
}
// act cat

if (checkanagram("heart" , "earth") == true) {
    console.log("anagram")
}