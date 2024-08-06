const bank = {
    5000: 3,
    1000: 5,
    500: 3,
    100: 2,
    50: 1,
    10: 4
}

function atm (number, bank){
    const arrBills = Object.keys(bank).reverse()
    let num = number

    return arrBills.reduce((acc, item) => {
        if (num - item >= 0){
            num -= item
            acc[item] = (acc[item] || 0) + 1
            while (num - item >= 0){
                num -= item
                acc[item] = (acc[item] || 0) + 1
            }
        }
        return acc
    },{})

}
function atm2(amount, bank) {
    const sortedBills = Object.keys(bank).map(Number).sort((a, b) => b - a);
    const result = {};
    let remainingAmount = amount;

    for (const bill of sortedBills) {
        if (remainingAmount <= 0) break;

        const count = Math.min(Math.floor(remainingAmount / bill), bank[bill]);
        if (count > 0) {
            result[bill] = count;
            remainingAmount -= count * bill;
        }
    }

    if (remainingAmount > 0) {
        return false;
    }

    return result;
}


console.log(atm(11500, bank))
console.log(atm2(11500, bank))
