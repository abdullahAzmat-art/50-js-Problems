function covertheobject(obj){
    let coverted= {};
    for(let i=0; i<obj.length; i++){
         coverted[obj[i].id] = obj[i];
    }
    return coverted;
}

let obj = [
    {id:1 , name:"apple"},
    {id:2 , name:"banana"},
    {id:3 , name:"orange"}
]
console.log(obj)
let convertedObj = covertheobject(obj);
console.log(convertedObj);