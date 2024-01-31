const test1 = 'abc';
const test2 = 'asdsfsdfbsdfsc';

const checkSubsequence = (sequence, subSequence) => {
    let count = 0;
    let countForSub = 0
    while (countForSub <= subSequence.length-1){
        if (sequence[count] === subSequence[countForSub]){
            count++;
        }
        countForSub++;
    }
    return count === sequence.length;
}

console.log(checkSubsequence(test1,test2))
