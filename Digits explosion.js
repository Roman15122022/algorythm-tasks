function explode(s) { //O(n^2)
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
        for (let num = s[i]; num > 0; num--) {
            newStr += s[i]
        }
    }
    return newStr
}

function explode2(s) { //O(n)
    return s.split("").map((e) => e.repeat(+e)).join("");
}

console.log(explode('235'))
console.log(explode2('235'))
