/*
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

const splitCase = (str) => {
    const arr = str.split('');
    let symbol = '';
    arr.forEach((item) => {
        if (item !== item.toLowerCase()) {
            symbol = symbol + item;
        }
    })
    if (!symbol) {
        return str;
    }
    const arr2 = str.split(symbol);
    return [arr2[0], symbol + arr2[1]].join(' ');
}

const splitCase2 = (str) => {
    const array = str.split('');
    let arr = [];
    let block = [];
    array.forEach((item) => {
        if (item === item.toLowerCase()) {
            block.push(item);
        }else {
            arr.push(block.join(''));
            block = [];
            block.push(item);
        }
    })
    if (block.length) {
        arr.push(block.join(''));
    }
    return arr.join(' ');
}

function simplifyString(str) {
    let arr = [];
    let block = [];

    for (let item of str) {
        if (item === item.toLowerCase()) {
            block.push(item);
        } else {
            if (block.length) {
                arr.push(block.join(''));
                block = [];
            }
            block.push(item);
        }
    }

    if (block.length) {
        arr.push(block.join(''));
    }

    return arr.join(' ');
}

console.log(splitCase("camelCasing"));
console.log(splitCase2("camelCasingTiming"));
console.log(simplifyString("camelCasingTiming"));
