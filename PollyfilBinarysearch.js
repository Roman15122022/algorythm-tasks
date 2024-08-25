Array.prototype.binarySearch = function (num) {
    if (typeof num !== 'number') {
        return -1
    }

    let left = -1
    let right = this.length
    let count = 0

    while (right - left > 1) {
        count++

        let mid = Math.floor((right + left) / 2)

        if (num === this[mid]) return { mid, count }

        if (this[mid] > num) {
            right = mid
        } else {
            left = mid
        }
    }

    return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr.binarySearch(1))
