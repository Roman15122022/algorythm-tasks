// // // // // // // // // // // // const str1 = 'schaabool'
// // // // // // // // // // // // const str2 = 'chsloo'
// // // // // // // // // // // // const str3 = 'ab'
// // // // // // // // // // // // const str4 = 'aa'
// // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // // function checkIfAnnagram(str1, str2){
// // // // // // // // // // // // //     return str1.split('').sort().join('') === str2.split('').sort().join('')
// // // // // // // // // // // // // }
// // // // // // // // // // // // //
// // // // // // // // // // // // // console.log(checkIfAnnagram(str1, str2))
// // // // // // // // // // // //
// // // // // // // // // // // // function checkIfAnnagram2(str1, str2){
// // // // // // // // // // // //     if (str2.length !== str1.length) return false
// // // // // // // // // // // //
// // // // // // // // // // // //     const map = new Map()
// // // // // // // // // // // //
// // // // // // // // // // // //     for (let i = 0; i < str1.length; i++) {
// // // // // // // // // // // //         const item = str1[i]
// // // // // // // // // // // //         if (map.has(item)){
// // // // // // // // // // // //             const num =  map.get(item)
// // // // // // // // // // // //             map.set(item, num + 1)
// // // // // // // // // // // //         } else {
// // // // // // // // // // // //             map.set(item, 1)
// // // // // // // // // // // //         }
// // // // // // // // // // // //     }
// // // // // // // // // // // //
// // // // // // // // // // // //     for (let i = 0; i < str2.length; i++) {
// // // // // // // // // // // //         const item = str2[i]
// // // // // // // // // // // //         if (map.has(item)){
// // // // // // // // // // // //             const num = map.get(item)
// // // // // // // // // // // //             map.set(item, num - 1)
// // // // // // // // // // // //         }
// // // // // // // // // // // //     }
// // // // // // // // // // // //
// // // // // // // // // // // //
// // // // // // // // // // // //     return Array.from(map.values()).every(item => item === 0)
// // // // // // // // // // // // }
// // // // // // // // // // // //
// // // // // // // // // // // //
// // // // // // // // // // // // console.log(checkIfAnnagram2(str3,str4))
// // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // // // function debounce (fn, delay){
// // // // // // // // // // // //     let id = null
// // // // // // // // // // // //
// // // // // // // // // // // //     return (...args) => {
// // // // // // // // // // // //         const context = this
// // // // // // // // // // // //         clearTimeout(id)
// // // // // // // // // // // //         id = setTimeout(() => {
// // // // // // // // // // // //             fn.apply(context, args)
// // // // // // // // // // // //         }, delay)
// // // // // // // // // // // //     }
// // // // // // // // // // // // }
// // // // // // // // // // // //
// // // // // // // // // // // // const debFn = debounce(() => {
// // // // // // // // // // // //     console.log(123)}, 300)
// // // // // // // // // // // //
// // // // // // // // // // // //
// // // // // // // // // // // // debFn()
// // // // // // // // // // // // debFn()
// // // // // // // // // // // // debFn()
// // // // // // // // // // // // debFn()
// // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // // function trottle (fn, delay) {
// // // // // // // // // // //     let lastCallTime = 0
// // // // // // // // // // //
// // // // // // // // // // //     return (...arg) => {
// // // // // // // // // // //         const currentTime = Date.now()
// // // // // // // // // // //         if (currentTime - lastCallTime > delay){
// // // // // // // // // // //             fn.apply(this, arg)
// // // // // // // // // // //             lastCallTime = currentTime
// // // // // // // // // // //         }
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // //
// // // // // // // // // // // const tfn = trottle(() => {
// // // // // // // // // // //     console.log(123)
// // // // // // // // // // // }, 100)
// // // // // // // // // // //
// // // // // // // // // // // tfn()
// // // // // // // // // // // tfn()
// // // // // // // // // // // tfn()
// // // // // // // // // // // tfn()
// // // // // // // // // // // tfn()
// // // // // // // // // // // tfn()
// // // // // // // // // // // tfn()
// // // // // // // // // // // tfn()
// // // // // // // // // //
// // // // // // // // // // const polindrom = (str) => {
// // // // // // // // // //     if (str.length % 2 !== 0) return  false
// // // // // // // // // //
// // // // // // // // // //     for (let i = 0; i < str.length; i++) {
// // // // // // // // // //         if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) return false
// // // // // // // // // //     }
// // // // // // // // // //
// // // // // // // // // //     return true
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // console.log(polindrom('strrts12'))
// // // // // // // // //
// // // // // // // // //
// // // // // // // // // const uniq = 'aabbccdeff' // 'd'
// // // // // // // // //
// // // // // // // // // function firstUniq(str){
// // // // // // // // //     const map = {}
// // // // // // // // //
// // // // // // // // //     for (let i = 0; i < str.length; i++) {
// // // // // // // // //         const item = str[i]
// // // // // // // // //
// // // // // // // // //         map[item] = (map[item] || 0) + 1
// // // // // // // // //     }
// // // // // // // // //
// // // // // // // // //     for (let i = 0; i < str.length; i++) {
// // // // // // // // //         const item = str[i]
// // // // // // // // //
// // // // // // // // //         if (map[item] === 1) return item
// // // // // // // // //     }
// // // // // // // // //
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(firstUniq(uniq))
// // // // // // // //
// // // // // // // // const arr = [1, 2, 2, 3, 1, 1]
// // // // // // // //
// // // // // // // // const freequncy = (arr) => {
// // // // // // // //     return arr.reduce((acc, item) => {
// // // // // // // //        acc[item] = (acc[item] || 0) + 1
// // // // // // // //
// // // // // // // //         return acc
// // // // // // // //     }, {})
// // // // // // // // }
// // // // // // // //
// // // // // // // // console.log(freequncy(arr))
// // // // // // //
// // // // // // // const obj =  [
// // // // // // //         { name: 'Roman', age: 25 },
// // // // // // //         { name: 'Roman', age: 25 },
// // // // // // //         { name: 'Anna', age: 30 },
// // // // // // //         { name: 'Oleg', age: 25 }
// // // // // // //     ]
// // // // // // //
// // // // // // // function groupBy (obj, field){
// // // // // // //     return obj.reduce((acc, item) => {
// // // // // // //         acc[item[field]] = [...(acc[item[field]] || []), item]
// // // // // // //
// // // // // // //         return acc
// // // // // // //     }, {})
// // // // // // // }
// // // // // // //
// // // // // // // console.log(groupBy(obj, 'name'))
// // // // // //
// // // // // // const arr = [1, [2, [3, 4], 5], 6]
// // // // // //
// // // // // // const flatten = (arr) => {
// // // // // //     // return arr.flat(Infinity)
// // // // // //     const result = []
// // // // // //
// // // // // //     for (let i = 0; i < arr.length; i++) {
// // // // // //         const item = arr[i]
// // // // // //
// // // // // //         if (Array.isArray(item)){
// // // // // //             result.push(...flatten(item))
// // // // // //         } else {
// // // // // //             result.push(item)
// // // // // //         }
// // // // // //     }
// // // // // //
// // // // // //     return result
// // // // // // }
// // // // // //
// // // // // // console.log(flatten(arr))
// // // // //
// // // // // const user = {
// // // // //     name: 'Roman',
// // // // //     address: {
// // // // //         city: 'Lviv'
// // // // //     }
// // // // // }
// // // // //
// // // // // const getByPath = (obj, path) => {
// // // // //     const pathParts = path.split('.')
// // // // //
// // // // //     return pathParts.reduce((accumulator, pathPart) => {
// // // // //         if (accumulator == null) {
// // // // //             return undefined
// // // // //         }
// // // // //
// // // // //         return accumulator[pathPart]
// // // // //     }, obj)
// // // // // }
// // // // //
// // // // //
// // // // // console.log(getByPath(user, 'address.city'))
// // // //
// // // // // const once = (fn) => {
// // // // //     let flag = null
// // // // //
// // // // //     return (...args) => {
// // // // //         if (flag !== null) return flag
// // // // //         flag = fn.apply(this, args)
// // // // //     }
// // // // // }
// // // // //
// // // // // const oncefn = once(() => {
// // // // //     console.log(12312)
// // // // //     return 12
// // // // // })
// // // // //
// // // // //
// // // // // oncefn()
// // // // // oncefn()
// // // // // oncefn()
// // // // // oncefn()
// // // //
// // // //
// // // // const memoize = (fn) => {
// // // //     const cache = {}
// // // //
// // // //     return function (...args) {
// // // //         const cacheKey = JSON.stringify(args)
// // // //
// // // //         if (cacheKey in cache) {
// // // //             return cache[cacheKey]
// // // //         }
// // // //
// // // //         const result = fn.apply(this, args)
// // // //         cache[cacheKey] = result
// // // //
// // // //         return result
// // // //     }
// // // // }
// // // //
// // // // const sum = (a, b) => {
// // // //     console.log('calculate')
// // // //     return a + b
// // // // }
// // // //
// // // // const memoizedSum = memoize(sum)
// // // //
// // // // console.log(memoizedSum(2, 3))
// // // // console.log(memoizedSum(2, 3))
// // // // console.log(memoizedSum(4, 5))
// // // // console.log(memoizedSum(4, 5))
// // //
// // //
// // // const prices = [130, 100, 90, 95, 97, 80, 85, 100, 95, 81, 125, 70]
// // //
// // //
// // // function maxRevenue (prices) {
// // //     let res = -Infinity
// // //     let minPrice = prices[0]
// // //
// // //     for (let i = 0; i <prices.length; i++) {
// // //         const item = prices[i]
// // //
// // //         const profit = item - minPrice
// // //         if (profit > res) res = profit
// // //         if (item < minPrice) minPrice = item
// // //     }
// // //
// // //     return res
// // // }
// // //
// // // console.log(maxRevenue(prices))
// //
// // function myPromiseAll(arr) {
// //
// //     const results = []
// //
// //     return new Promise((resolve, reject) => {
// //         let completedCount = 0
// //
// //         for (let index = 0; index < arr.length; index++) {
// //             Promise.resolve(arr[index])
// //                 .then((value) => {
// //                     results[index] = value
// //                     completedCount += 1
// //                     if (completedCount === arr.length) {
// //                         resolve(results)
// //                     }
// //                 })
// //                 .catch(reject)
// //
// //         }
// //
// //     })
// //
// // }
//
//
// const tickets = [2, 3, 2]
//
// function timeRequiredToBuy(tickets, indexK) {
//     let position = indexK
//     let lastPerson
//     let count = 0
//
//     while (tickets[position] !== 0){
//         tickets[0] = tickets[0] - 1
//         if (tickets[0] === 0 && position === 0) return count
//         lastPerson = tickets.shift()
//         position = position - 1
//         if (lastPerson !== 0) tickets.push(lastPerson)
//         if (position === 0) {
//             position = tickets.length - 1
//         }
//         count++
//     }
//
// }
//
//
// console.log(timeRequiredToBuy([2, 3, 2], 2)) // 6
// console.log(timeRequiredToBuy([5, 1, 1, 1], 0)) // 8
// console.log(timeRequiredToBuy([1], 0)) // 1
// console.log(timeRequiredToBuy([1, 1, 1, 1], 2)) // 3
// console.log(timeRequiredToBuy([2, 1, 2], 0)) // 4
// console.log(timeRequiredToBuy([2, 1, 2], 1)) // 2
// console.log(timeRequiredToBuy([3, 3, 3], 1)) // 8
// console.log(timeRequiredToBuy([4, 2, 1], 1)) // 4
// console.log(timeRequiredToBuy([1, 2, 3], 2)) // 6
// console.log(timeRequiredToBuy([3, 2, 1], 0)) // 6
//
//
// function timeRequiredToBuy(tickets, k) {
//     const queue = tickets.map((ticketsCount, index) => ({
//         ticketsCount,
//         index
//     }))
//
//     let totalTime = 0
//     while (queue.length > 0) {
//         const currentPerson = queue.shift()
//         currentPerson.ticketsCount -= 1
//         totalTime += 1
//         if (currentPerson.index === k && currentPerson.ticketsCount === 0) {
//             return totalTime
//         }
//
//         if (currentPerson.ticketsCount > 0) {
//             queue.push(currentPerson)
//         }
//
//     }
//
// }


const intervals = [[6, 8], [1, 4], [11, 12], [2, 3], [8, 10], [5, 7]]

function mergeIntervals(intervals){
    const sortedArr = [...intervals].sort((a, b) => a[0] - b[0])
    const result = []

    for (let i = 0; i < sortedArr.length; i++) {
        const current = sortedArr[i]
        const lastMergedInterval = result[result.length - 1]

        if (!lastMergedInterval) {
            result.push(current)
        } else if (lastMergedInterval[1] >= current[0]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], current[1])
        } else {
            result.push(current)
        }
    }

    return result
}


console.log(mergeIntervals(intervals))