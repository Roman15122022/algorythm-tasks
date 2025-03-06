const polydrome = 'A Santa lived as a devil at NASA.'
const notPolyndrome = 'I love prog'


function isLetter(item){
    return item.toUpperCase() !== item.toLowerCase();
}

function isPolyndrome(polydrome) {
    let left = 0
    let right = polydrome.length - 1;

    while (left < right) {
        if(!isLetter(polydrome[left])){
            left++
        }

        if(!isLetter(polydrome[right])){
            right--
        }

        if(polydrome[left].toLowerCase() !== polydrome[right].toLowerCase()) return false

        left++
        right--
    }

    return true;
}

console.log(isPolyndrome(polydrome));
console.log(isPolyndrome(notPolyndrome));