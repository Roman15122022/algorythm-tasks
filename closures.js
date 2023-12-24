const obj = {
    a: 5,
    say: function (){
        setTimeout(()=>{
            console.log(this.a);  //not working with function declaration;
        })
    }
}

obj.say();

let name = 'apple';

function sayHi(){
    console.log(name);
}

setTimeout((function (){
    let name = 'orange';
    sayHi();
}))

/*
for (var i = 0; i < 10; i++) {
    setTimeout(() =>{
        console.log(i);
    },1000)
}*/
// |
// v
// first
for (let i = 0; i < 10; i++) {
    setTimeout(() =>{
        console.log(i);
    },1000)
}

// second
for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(() =>{
            console.log(j);
        },1000)
    })(i)
}

//third

for (var i = 0; i < 10; i++) {
    setTimeout((i) =>{
        console.log(i);
    },1000, i)
}

