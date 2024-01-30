
const string = "  fly  to the    moon  "

const lastWordLength = (string) => {
    let count = 0;
    for (let i = string.length-1; i > 0; i--) {
        if (string[i] !== ' '){
            count++;
            if (string[i-1] === ' ') return count
        }
    }
    return flag
}

console.log(lastWordLength(string), 'ad')
