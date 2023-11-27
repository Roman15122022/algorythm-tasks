//check on polydrome

let str = 'deed';
let str2 = 'asddsa'

const checkOnPolydrome = (str) =>{
    for (let i = 0; i < str.length/2; i++){
        if (str[i] !== str[--str.length-i]){
            return false;
        }
    }
    return true;
}

console.log(checkOnPolydrome(str2))
