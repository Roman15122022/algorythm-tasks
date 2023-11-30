function solution(str, ending){
    if(str.slice(str.length - ending.length,str.length) === ending){
        return true;
    }
    return false;
}
console.log(solution('sadasda' ,'sda'))
