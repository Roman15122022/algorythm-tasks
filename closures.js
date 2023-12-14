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


let foo = function bar() { };
console.log(typeof foo)

var f = function() {
    console.log(1);
}

var execute = function(f) {
    setTimeout(f, 1000);
}

execute(f); // что выведет в консоль и почему

f = function() {
    console.log(2);
}
