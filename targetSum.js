const nums = [2, 7, 11, 15]

const target = 9

console.time('Start')
function getSumIndex(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const first = target - nums[i]
        for (let j = 1 + i; j < nums.length; j++) {
            if (first - nums[j] === 0)
                return [i, j]
        }
    }
}


function getSumIndex2(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const dif = target - nums[i]

        if (map.has(dif)) {
            return [map.get(dif), i]
        }

        map.set(nums[i], i)
    }
}
console.log(getSumIndex2(nums, target))
console.timeEnd('Start')
console.log(getSumIndex(nums, target))


