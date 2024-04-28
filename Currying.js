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

const arr = [1,23,45,6]
const obj = { name: 'SD', age: "12312"}
const obj2 = {asd: '2131', name: 12}

console.log({...obj, ...obj2})




