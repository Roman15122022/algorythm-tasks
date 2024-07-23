/*
function* gen() {
    let ask1 = yield;

    console.log(ask1); // 4

    let ask2 = yield

    console.log(ask2); // 9
}

let generator = gen();
*/


function* pseudoRandom (seed) {
   let temp = seed;

    for (let i = 0; i >= 0; i++) {
        temp = temp * 16807 % 2147483647
        yield temp
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
