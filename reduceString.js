// AAABBCCCCCHHH
//A3B2C5H3

function sringNumber(str){
    let dictionary = {};

    for (let i = 0; i < str.length; i++){
        dictionary[str[i]] = (dictionary[str[i]] || 0) + 1;
    }
    let arr = [... new Set(str)];
    return arr.map(item => item + dictionary[item]);
}

console.log(sringNumber('AAABBCCCCCHHH'));
