// (){}[] -> true
// ({}) -> true
// ({)} -> false
// {[[]{}]}()() -> true
//({}){ -> false
//({})} -> false

const brecketValidity = (str) => {
    const arr = str.split('');
    if (arr.length % 2 === 1) return false
    let stack = [];
    const dictionary = {
        '(': 1,
        '{': 3,
        '[': 5,
        ')': 2,
        '}': 6,
        ']': 10,
    }
    for (let i = 0; i < arr.length; i++) {
        if (dictionary[arr[i]] % 2 === 1) {
            stack.push(dictionary[arr[i]])
        }
        if (dictionary[arr[i]] % 2 === 0) {
            if (stack[stack.length - 1] % 2 === 1 && stack[stack.length - 1] !== dictionary[arr[i]] / 2) {
                return false
            }
            for (let j = 0; j < stack.length; j++) {
                if (stack[j] === dictionary[arr[i]] / 2) {
                    stack = stack.filter(item => item !== stack[j]);
                }
            }
        }
    }
    return !Boolean(stack.length);
}


// Simplify and answer

const isValid = (str) => {
    if (str.length % 2 !== 0) return false;
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(')')
        } else if (str[i] === '[') {
            stack.push(']')
        } else if (str[i] === '{') {
            stack.push('}')
        } else if (stack.pop() !== str[i]) {
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid('()'));
