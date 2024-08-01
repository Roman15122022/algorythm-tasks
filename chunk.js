//chunk([1,2,3,4,5,6],2)
//output [[1,2],[3,4],[5,6]]


const arr = [1, 2, 3, 4, 5, 6];
const chunk = (arr, num) => {
    let result = [];
    let chunk = [];
    let counter = 1;

    arr.forEach((item) =>{
        chunk.push(item);
        if (counter === num){
            result.push(chunk);
            chunk = [];
            counter = 0;
        }
        counter++;
    })
    if (chunk.length) result = [result, [... chunk]];
    return result;

}

console.log(chunk(arr,2));
