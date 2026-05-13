//
// function myReverseSctirng(str) {
//     let answer = ''
//
//     for (let i = str.length - 1; i >= 0; i--) {
//         answer = answer + str[i]
//     }
//
//     return answer;
// }
//
// console.log(myReverseSctirng('hello'))
//
// function myAnnagram(str1, str2) {
//     if (str1.length !== str2.length) return false
//
//     return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
// }
//
// console.log(myAnnagram('str', 'tsr'), myAnnagram('21', '31'))
//

//
// function firtUniqSybmol (str) {
//    const obj = str.split('').reduce((acc, item) => {
//        acc[item] = (acc[item] || 0) + 1
//
//        return acc
//    }, {})
//
//
//     return Object.keys(obj).filter(item => obj[item] === 1)[0]
// }

function firstUnikSym(str) {
  const count = new Map();

  for (let item of str) {
    count.set(item, (count.get(item) || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (count.get(str[i]) === 1) {
      return str[i];
    }
  }

  return false;
}

// function firstUniqSymbol(str) {
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (str.indexOf(char) === str.lastIndexOf(char)) {
//             return char;
//         }
//     }
//     return null; // Якщо немає унікальних символів
// }

//
// console.log(firtUniqSybmol('swiss'), firtUniqSybmol('sdsdfgfhyhyj'))
//
//
// function removeDupl(arr){
//     return [...new Set(arr)]
// }
//
// console.log(removeDupl([11,11,22,3,44,22]))

//
// function timeout(fn, delay){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(fn())
//         }, delay)
//     })
// }
//
// timeout(() => console.log(1), 500)

// function debounce (fn, delay) {
//     let timeout
//
//     return () => {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             fn()
//         }, delay)
//     }
// }
//
// function trottle (fn, ms) {
//     let lastTimeCalled = 0
//
//     return (...args) => {
//       const now = Date.now()
//
//         if (now - lastTimeCalled >= ms){
//             lastTimeCalled = now
//
//             fn.apply(this, args)
//         }
//     }
// }

// function findMaxsumSubarray(arr, k){
//     let currentSum = arr.slice(0, k).reduce((sum, num) => sum + num, 0);
//     let maxSum = currentSum;
//
//     for (let i = k; i < arr.length; i++) {
//         currentSum = currentSum - arr[i - k] + arr[i];
//         maxSum = Math.max(maxSum, currentSum);
//     }
//
//
//     return maxSum
// }
//
// console.log(findMaxsumSubarray([1,4,2,10,23,3,1,0,20], 4))

// function flattenArray (arr) {
//     const result = []
//
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])){
//             result.push(...flattenArray(arr[i]))
//         } else {
//             result.push(arr[i])
//         }
//     }
//
//     return result
// }
//
// console.log(flattenArray([1, [2, [3, 4]], 5]))

// async function customRetry(url, count = 5){
//     try {
//         const result = await fetch(url)
//
//         if (!result.ok) {
//             throw new Error('Oh no')
//         }
//
//         return result.json()
//     } catch (e) {
//         if (count === 0) throw new Error('Smth went wrong')
//
//         return customRetry(url, --count)
//     }
// }
//
// customRetry('http://localhost', 5)

// const add1 = x => x + 1
// const double = x => x * 2
// const square = x => x * x
//
// function compose(...args){
//     return (num) => {
//         return args.reduceRight((acc, item) => {
//             acc = item(acc)
//
//             return acc
//         }, num)
//     }
// }
//
// const composed = compose(square, double, add1)
// console.log(composed(2))

// function currySum(...args){
//     return (...argsSum) => {
//         if (argsSum.length === 0) {
//             return args.reduce((acc, item) => {
//                 acc = acc + item
//
//                 return acc
//             }, 0)
//         }
//
//         return currySum(...argsSum, ...args)
//     }
// }
//
// function currySumForOne(num1){
//     return (num2) => {
//         if (num2 === undefined){
//             return num1
//         }
//
//         return currySumForOne(num1 + num2)
//     }
// }
//
//
// console.log(currySum(2, 3)(3)(4)())
// console.log(currySumForOne(2)(3)(4)())

//
// function arrChunk(arr, count) {
//     const result = []
//     let chunk = []
//     let counter = 0
//
//     arr.forEach(item => {
//         if (counter < count){
//             chunk.push(item)
//             counter++
//         }
//
//         if (counter === count){
//             result.push(chunk)
//             chunk = []
//             counter = 0
//         }
//     })
//
//     if (chunk.length) {
//         result.push(chunk)
//     }
//
//     return result
//
//
// }
//
// console.log(arrChunk([1,2,3,4,5], 2))

// function flatten(obj, prefix = '', result = {}) {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const newKey = prefix ? `${prefix}.${key}` : key;
//
//             if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
//                 flatten(obj[key], newKey, result);
//             } else {
//                 result[newKey] = obj[key];
//             }
//         }
//     }
//
//     return result;
// }
//
// const obj = { a: { b: { c: 1 } }, d: 2 }
// console.log(flatten(obj)) // { "a.b.c": 1, "d": 2 }

// function groupBy(arr, key){
//     return arr.reduce((acc, item) => {
//         acc[item[key]] = [...(acc[item[key]] || []), item]
//
//         return acc
//     }, {})
// }
//
// console.log(groupBy([{age:20},{age:30},{age:20}], 'age'))
// // {20: [{age:20},{age:20}], 30: [{age:30}]}

// const myPromiseAll = (arr) => {
//     return new Promise((res, rej) => {
//         if (arr.length === 0) {
//             return res([])
//         }
//
//
//         let counter = 0
//         const result = []
//
//         arr.forEach((item, index) => {
//             Promise.resolve(item).then(response => {
//                 result[index] = response
//                 counter++
//
//                 if (counter === arr.length){
//                     res(result)
//                 }
//             }).catch(e => rej(e))
//         })
//     })
// }
//
// function sleep(time){
//     return new Promise((res) => {
//         setTimeout(() => {
//             res()
//         },time)
//     })
// }

// function maxProfit(arr){
//    let minPrice = arr[0]
//    let maxProfit = 0
//
//     arr.forEach(item => {
//         if (item < minPrice){
//             minPrice = item
//         }
//
//         if (item - minPrice > maxProfit){
//             maxProfit = item - minPrice
//         }
//     })
//
//
//     return {maxProfit}
// }

//
// console.log(maxProfit([7,1,4,45,6,4]))

function secondHighNumber(arr) {
  let maxValue = -Infinity;
  let secondMax = -Infinity;

  arr.forEach((item) => {
    if (item > maxValue) {
      secondMax = maxValue;
      maxValue = item;
    } else {
      secondMax = Math.max(secondMax, item);
    }
  });

  return secondMax;
}

console.log(secondHighNumber([22, 11, 5, 1, 3]));
