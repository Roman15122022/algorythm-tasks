function explode(s) { //O(n^2)
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < +s[i]; j++) {
            newStr += s[i]
        }
    }
    return newStr
}

function explode2(str) { //O(n)
    return str.split("").map((elem) => elem.repeat(+elem)).join("");
}

console.log(explode('235'))
console.log(explode2('235'))
