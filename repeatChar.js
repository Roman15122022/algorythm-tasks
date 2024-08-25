const str = 'Roma'

function repeatChar (str, count) {
    return str.split('').map(item => item.repeat(count)).join('')
}

console.log(repeatChar(str, 3))
