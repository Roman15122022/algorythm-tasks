//isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

const isIsogram = (str) => {
    if (!str.length) return true;

    const lowerStr = str.toLowerCase();

    const letter = {};

    for (let i = 0; i < lowerStr.length; i++) {
        letter[lowerStr[i]] = (letter[lowerStr[i]] || 0) + 1;
    }

    const arr = Object.values(letter);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 2) {
            return false;
        }
    }

    return true;
}

console.log(isIsogram('moOse'));
