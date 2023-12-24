/*At night the only guaranteed "safe" chickens are in their cages [] (unless a fox has got into the cage with them!)

Kata Task
Given the initial configuration of foxes and chickens what will the farm
 look like the next morning after the hungry foxes have been feasting?

Ex1	Before
CCC[CCC]FCC[CCCCC]CFFFF[CCC]FFFF
After
...[CCC]F..[CCCCC].FFFF[CCC]FFFF

 */

const hungryFoxes = (farmStr) => {
    const farmArray = farmStr.split('');
    const totalArray = [];
    let fox = 0;
    farmArray.forEach((item) => {
        if (item === 'F') fox++;
    })
    if (fox) {
        let prison = false;
        farmArray.forEach((item) => {
            if (item === '[') {
                prison = true;
                totalArray.push(item);
            }
            if (item === ']') {
                prison = false;
                totalArray.push(item);
            }
            if (item === 'F') {
                totalArray.push(item);
                if (!prison) prison = false;
            }

            if (prison && item === 'C') {
                totalArray.push(item)
            }
            if (!prison && item === 'C') {
                totalArray.push('.')
            }
        })
        return totalArray.join('');
    } else {
        return farmStr;
    }
}

console.log(hungryFoxes('CCC[CCC]FCC[CCCCC]CFFFF[CCC]FFFF'))

