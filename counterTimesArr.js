// {kiwi: 3, apple: 5, orange: 2}

const counterTimesArr = (arr) => {
    return arr.reduce((memo, item) =>{
        memo[item] = (memo[item] || 0) + 1;
        console.log(memo);
        return memo;
    },{})
}

console.log(counterTimesArr(['orange', "orange", "orange", 'kiwi', "kiwi", "kiwi", "kiwi", "kiwi", "kiwi", "kiwi", "orange"]));
