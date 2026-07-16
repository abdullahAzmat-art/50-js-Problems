for (let i = 0; i < 4; i++) {
    let space = ""
    for (let j = 0; j < 4 - i - 1; j++) {
        space = space + " "

    }
    let star = ""
    for (let k = 0; k < i * 2 + 1; k++) {
        star = star + "*"

    }

    let row1 = ""
    for (let l = 0; l < 4-i-1; l++) {
        row1 = row1 + " "
        
    }

    console.log(space + star + row1)


}