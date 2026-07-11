function checkrepeat(str){

    let words = ""
    for (let i = 0; i < str.length-1; i++) {
        
        if (str[i] != str[i+1]) {
            words = str[i]
        }
        
    }
    return words
}

let str = "aaddeff"
console.log(checkrepeat(str))