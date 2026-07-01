function checkpali(str){
    let reversestring = "";
    for(let i = str.length-1 ; i>=0 ; i--){
        reversestring += str[i];
    }

    if(reversestring == str){
        return "pali";
    }
}

 console.log(checkpali("madam"))