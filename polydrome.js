//check on polydrome

let str = 'deed';
let str2 = 'uаasddsaаu'

const checkOnPolydrome = (str) => {  //O(n/2) == O(n);
    str = str.toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[--str.length - i]) {
            return false;
        }
    }
    return true;
}

const polyndrome = (str) => {
    let string = str.toLowerCase();
    return (string === string.split('').reverse().join(''));
}

const polyndrome2 = (str) => {
    let string = '';
    for (let i = str.length-1; i >= 0; i--) {
        string += str[i];
    }
    return string === str;
}

console.log(checkOnPolydrome(str2))
console.log(polyndrome(str2))
console.log(polyndrome2(str2))
