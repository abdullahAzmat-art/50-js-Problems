let person = {
    name: "Abdullah",
    address: {
        city: "Lahore", 
        address:{
            street: "Street 1",            house: "House 1"
        }
    }
};

function deepclone(obj){
    let newobj = {};

    for(let n in obj){
        if (typeof obj[n] == "object") {
            newobj[n] = deepclone(obj[n]);
        }else{
            newobj[n] = obj[n];
        }
    }
    return newobj;
}

console.log(deepclone(person))





// let person2 = {};

// person2.name = person.name;
// person2.address = { city: person.address.city };



// function increase(n){
//     console.log(n)
//     if(n < 10){
//         n++;
//         increase(n)
//     }
// }
// increase(0)




let newaarray = [];

function deeparray(arr){

    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            deeparray(arr[i])
        }else{
             newaarray.push(arr[i])
        }
    }
}
deeparray([1,2,[3,4],5,[6,7]])
console.log(newaarray)