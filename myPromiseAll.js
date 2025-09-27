const promises = [
    Promise.resolve(1),                       // миттєво резолвиться
    new Promise(res => setTimeout(() => res(2), 1000)), // резолвиться через 1с
    new Promise(res => setTimeout(() => res(3), 500)),  // резолвиться через 0.5с
    Promise.resolve("hello"),                 // миттєво резолвиться
    Promise.reject("oops!")                   // відразу реджект
]

function myPromiseAll(arr) {
   return new Promise((resolve, reject) => {
       const results = []
       let count = 0

       arr.forEach((item, index) => {
           Promise.resolve(item).then(res => {
               results[index] = res
               count++

               if(count === arr.length){
                   resolve(results)
               }
           }).catch(rej => reject(rej))
       })
   })
}

console.log(myPromiseAll(promises).then(console.log).catch(console.log))