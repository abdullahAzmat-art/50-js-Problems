for (let i = 4; i > 0; i--) {
    
    let row = ""
    for (let j = 4-i; j > 0; j--) {
        row = row+ " "


        
    }
let row1 = ""
    for (let k = i*2-1; k > 0; k--) {
        row1 = row1 + "*"
        
    }

    let row2 = ""
for (let l = 4-i; l > 0; l--) {
    row2 = row2 + " "
    
}
    console.log(row + row1 + row2)
}