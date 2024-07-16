var f = function () {

    console.log(1);

}

var execute = function (f) {

    setTimeout(f, 1000);

}

execute(f);

f = function () {

    console.log(2);

}

/*------------------------------------*/

console.log({} + []) // '1'

console.log(!!"false" == !!"true") // true

console.log(['x'] == 'x') // true
