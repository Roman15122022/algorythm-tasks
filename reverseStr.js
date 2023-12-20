// 'pizza' => 'azzip'

const reverseStr = (str) => {
    return str.split('').reverse().join('')
}

const reverseStr2 = (str) => {
    let str2 = '';
    for (let i = str.length-1; i >= 0; i--) {
        str2 = str2 + str[i];
    }
    return str2;
}

console.log(reverseStr('pizza'))
console.log(reverseStr2('pizza'))
