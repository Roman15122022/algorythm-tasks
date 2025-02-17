function sumRec (...numbers) {
    if (numbers.length === 5){
        return numbers.reduce((sum, num) => sum + num, 0);
    }

    return function (...nums){
        return sumRec(...numbers, ...nums);
    }
}


console.log(sumRec(1,2,3)(4,5))
console.log(sumRec(1,2)(3,4,5))
console.log(sumRec(1)(2,3,4,5))
console.log(sumRec(1,2,3)(4)(5))