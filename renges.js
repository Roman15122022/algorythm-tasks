const array = [1, 4, 5, 2, 3, 9, 8, 11, 0]


const ranges = (arr) => {
    const answer = []
    let tempArr = []
    const sortedArr = [...arr.sort((a, b) => a - b)]

    for (let i = 0; i < sortedArr.length; i++) {

        if (!tempArr.length){
            tempArr.push(sortedArr[i])
            continue
        }

        if (sortedArr[i] !== sortedArr[i-1] + 1){
            tempArr.push(sortedArr[i-1])
            answer.push(tempArr)
            tempArr = [sortedArr[i]]
        }

    }
    answer.push(tempArr)

    return answer
}

console.log(ranges(array)) //[[0, 5], [8, 9], [11]]
