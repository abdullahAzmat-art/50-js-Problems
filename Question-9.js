function checkstring(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        count++;
    }
    return count;
}
console.log(checkstring("hello"))