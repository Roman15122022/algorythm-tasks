//  f(a)(b)(c)

function sum(a) {
    return function(b) {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    };
}

console.log(sum(2)(5)(5));
