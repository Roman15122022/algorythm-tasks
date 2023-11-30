console.log(1)
const a = new Promise((resolve,reject) => resolve(console.log(2)));
a.then(res => console.log(3));

setTimeout(()=>{ //macrotask
    console.log(4);
})
a.then(()=> console.log(6)) //micro task
console.log(5);

//1
//2
//5
//3
//6
//4
