/*var Roma = 'Roman Malyi'

console.log(window.Roma) // Roman Malyi

let Romchick = 'nice work window object'

console.log(window.Romchick) // undefinded

function example(a = 10, b = 20){
    return a + b;
}

console.log(window.example())

window.test = 'test' // var

console.log(test)*/

requestAnimationFrame(() => {
    console.log('animation frame')
})

console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

setTimeout(() => {
    console.log('Timeout2');
}, 0);

setTimeout(() => {
    console.log('Timeout3');
}, 1); // граница 223 когда таймер виполняеться после requestIdleCallback

Promise.resolve().then(() => {
    console.log('Promise');
});

requestIdleCallback(() => {
    console.log('Idle Callback');
});


console.log('End');
