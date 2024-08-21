const l2 = [5,6,4]

const l1 = [2,4,3]


function addTwoNum (l1,l2) {
    const numFirst = l1.reverse().join('')
    const numSecond = l2.reverse().join('')

    return (+numFirst + +numSecond).toString().split('').reverse()
}

console.log(addTwoNum(l1,l2))
