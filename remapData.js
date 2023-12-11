function remapData(data) {
    return data.reduce((memo, item) => {
        for (let i = 1; i < item.length; i++) {
            memo[item[i]] = memo[item[i]] || [];
            memo[item[i]].push(item[0]);
        }
        return memo;
    }, {});
}


console.log(remapData([
    ['Cucumber', 'Roma', 'Yarik'],
    ['Tomato', 'Liza', 'Roma'],
    ['Rice','Liza', 'Roma', 'Maksim'],
    ['Fish', 'Roma']
]))

/*
{
'Yarik': ['Cucumber'],
'Roman': ['Cucumber', 'Tomato', 'Rice', 'Fish'],
'Liza': ['Tomato', 'Rice'],
'Maksim': ['Rice']
}
 */
