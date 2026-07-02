function fizbuz(n){
    for (let i = 1; i <= n; i++) {
        if(i %3 == 0 && i % 5!=0 ){
            console.log("fiz")
        }else if (i % 5 == 0 && i % 3 !=0) {
             console.log("buzz")
        }else if (i % 3 == 0 && i % 5==0) {
             console.log("Fiz buzz")
        }else{
            console.log(i)
        }

        
    }
}
fizbuz(100)