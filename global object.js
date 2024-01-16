var Roma = 'Roman Malyi'

console.log(window.Roma) // Roman Malyi

let Romchick = 'nice work window object'

console.log(window.Romchick) // undefinded

function example(a = 10, b = 20){
    return a + b;
}

console.log(window.example())

window.test = 'test' // var

console.log(test)
