const string = "aababcabc"

const countUniq = (string) => {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if(string[i] !== string[i+1]){
            count++
        }
    }

    return count
}

console.log(countUniq(string))
