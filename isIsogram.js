//isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

const isIsogram = (str) => {
    const letter = {};
    for (let i = 0; i < str.length; i++) {
        letter[str[i]] = (letter[str[i]] || 0) + 1;
    }
    const arr = Object.values(letter);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 2){
            return false;
        }
    }
    return true;
}

console.log(isIsogram('moose'));
