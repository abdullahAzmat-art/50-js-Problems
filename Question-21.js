function debounce(func , delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {func(...args)}, delay);
    }
}


const search = (txt ) => {
    console.log(txt);
}

const mydebounce = debounce(search, 1000);

mydebounce("Hello, world!");