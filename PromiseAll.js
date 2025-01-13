async function myPromiseAll(arr) {
  const arrAnswers = []
  let count = 0;

  return new Promise((resolve, reject) => {
    arr.forEach((promise, index) => {
      promise.then((value) => {
        arrAnswers[index] = value;
        count++;

        if (count === arr.length) {
          resolve(arrAnswers);
        }
      }).catch(reject);
    })
  })

}

const promises = [
 Promise.resolve((resolve) => setTimeout(() => resolve(5), 100)),
 Promise.resolve((resolve) => setTimeout(() => resolve(3), 100)),
];

const caseThree = [
  Promise.resolve(3),
  Promise.resolve(5),
  Promise.reject('Error!'),
]

myPromiseAll(promises).then(results => {
  console.log(results);
}).catch((err) => {
  console.log(err);
})
