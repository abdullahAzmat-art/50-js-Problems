
let obj = {
    "A": "a",
    "B": "b",
    "C": "c",
    "D": "d",
    "E": "e",
    "F": "f",
    "G": "g",
    "H": "h",
    "I": "i",
    "J": "j",
    "K": "k",
    "L": "l",
    "M": "m",
    "N": "n",
    "O": "o",
    "P": "p",
    "Q": "q",
    "R": "r",
    "S": "s",
    "T": "t",
    "U": "u",
    "V": "v",
    "W": "w",
    "X": "x",
    "Y": "y",
    "Z": "z"
}

function  uppercasetolowercase(str){
 let newstring = "";

 for (let index = 0; index < str.length; index++) {
    if(str[index]=="A" || str[index]=="B" || str[index]=="C" || str[index]=="D" || str[index]=="E" || str[index]=="F" || str[index]=="G" || str[index]=="H" || str[index]=="I" || str[index]=="J" || str[index]=="K" || str[index]=="L" || str[index]=="M" || str[index]=="N" || str[index]=="O" || str[index]=="P" || str[index]=="Q" || str[index]=="R" || str[index]=="S" || str[index]=="T" || str[index]=="U" || str[index]=="V" || str[index]=="W" || str[index]=="X" || str[index]=="Y" || str[index]=="Z"){
        newstring += obj[str[index]];
    }else{
        newstring += str[index];
    }
 }
 return newstring;
}

console.log(uppercasetolowercase("HELLo"))