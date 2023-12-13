//arr = [
//  {name: 'width', value: 10},
//  {name: 'height', value: 20}
// ]
//{width: 10, height: 20}

function fromArrayToObject(arr) {
    return arr.reduce((memo, item) => {
        memo[item.name] = item.value;
        return memo;
    }, {});
}

console.log(fromArrayToObject([{name: 'width', value: 10}, {name: 'height', value: 20}, {name: 'time', value: 60}]))
