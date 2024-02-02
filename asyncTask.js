// 'apple, elephant, three, forest' , 13
//  'lephant, orest' 233

const sliceString = (str) => {
    return str
        .split(',')
        .filter((item, index) => {
            if (index % 2 === 1) return item;
        })
        .map(item => item.slice(2, item.length))
        .join(', ');
}

const fibo = (num) => {
    if (num <= 1) {
        return num;
    }

    return fibo(num - 1) + fibo(num - 2)
}


async function asyncTask(str, num) {
    const fibonacci = await fibo(num);
    const string = await sliceString(str)

    return Promise.all([fibonacci, string]);
}

asyncTask('apple, elephant, three, forest' , 13).then((data) => {
    console.log(data)
})

