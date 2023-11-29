
function flatten(arr){ //O(n)
    let finallyArr = [];
    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            const flattenArr = flatten(arr[i]);
            finallyArr.push(...flattenArr);
        }else {
            finallyArr.push(arr[i]);
        }
    }
    return finallyArr;
}

console.log(flatten([1,2,3,[1,4],[[1,2,3]]])) // 123,1,2,3,3
