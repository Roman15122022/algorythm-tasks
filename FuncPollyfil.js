Function.prototype.timeout = function (timeout) {
    setTimeout(this, timeout)
}

Function.prototype.defer = function (ms) {
    let f = this
    return function (...args) {
        setTimeout(() => {
            f.apply(this, args)
        }, ms)
    }
}

function alertRoman() {
    console.log(312)
}

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2);

alertRoman.timeout(1000)
