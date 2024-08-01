

function splitStr(str) {
    const pair = 2
    let arr = []
    let chunk = []

    for (let i = 0; i < str.length; i++) {
        chunk.push(str[i])

        if (chunk.length === pair) {
            arr.push(chunk)
            chunk = []
        }
    }

    if (str.length % 2 !== 0){
        chunk.push('_')
        arr.push(chunk)
    }


    return arr
}


console.log(splitStr('abcsdass'))
console.log(splitStr('abc'))
console.log(splitStr('abcdefg'))
console.log(splitStr(''))
