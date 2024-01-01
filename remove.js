//remove("") === ""
// remove("!") === "!"
// remove("!!") === "!!"
// remove("!!!") === ""
// remove("!??") === "!??"
// remove("!???") === "!"
// remove("!!!??") === "??"
// remove("!!!???") === ""
// remove("!??") === "!??"
// remove("!???!!") === ""

const remove = (str) => {
    let answer = [];
    let arr = str.split('');
    let obj = {
        '!': 0,
        '?': 0,
    }
    for (let i = 0; i < str.length; i++) {
        obj[arr[i]]++;
    }
    obj['!'] = obj['!'] % 3;
    obj['?'] = obj['?'] % 3;
    for (let i = 0; i < str.length; i++) {
        if (obj[arr[i]] > 0){
            answer.push(arr[i]);
            obj[arr[i]] -= 1;
        }
    }
    console.log(obj)
    return answer.join('');
}

console.log(remove('???!?!!'))
