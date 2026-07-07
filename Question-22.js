const trottle = (fn, delay) => {
    let time = 0;
    return function(...args){
        if(Date.now() - time < delay){
           return;
        }
     
       return fn(...args);
        time = Date.now();
    }
}


const search = (txt ) =>{
    console.log(txt)
}


const mythrottle = trottle(search, 9000);
mythrottle("Hello, world!");