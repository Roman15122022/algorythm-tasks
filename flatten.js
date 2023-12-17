
function flatten(arr){ //O(n)
    let finallyArr = [];
    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            finallyArr.push(...flatten(arr[i]));
        }else {
            finallyArr.push(arr[i]);
        }
    }
    return finallyArr;
}

console.log(flatten([1,2,3,[1,4],[[1,2,3]]]))
/*console.log([1,2,3,[1,4],[[1,2,3]]].flat(Infinity))

console.log([1,2,3,[1,4],[[1,2,3]]].toString().split(',').map(Number))*/
