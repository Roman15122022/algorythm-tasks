for (var i= 0; i < 100; i++){ // log?
    setTimeout(()=>{
        console.log(i);
    },0)
}

//answer

for (let i = 0; i < 100; i++){ // log?
    setTimeout(()=>{
        console.log(i);
    },0)
}


//es5

for (var i= 0; i < 100; i++){ // log?
    setTimeout((i)=>{
        console.log(i);
    },0, i)
}


