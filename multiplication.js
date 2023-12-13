// in  '*', '1', 'b', '1c'
// out  '1*b*1c';

function multiplication(sign, ...rest){
    const arr = rest.reduce((memo, item) =>{
        return memo += item + sign;
    },'')
    return arr.slice(0, arr.length -1);
}

console.log(multiplication('*', '1', 'b', '1c','2','3'))
