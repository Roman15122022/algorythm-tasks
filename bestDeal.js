const prises = [130, 90, 78, 150, 66, 125, 90, 40]

function bestDeal(prises) {
    let minPrice = prises[0];
    let maxProfit = 0;
    let buyPrice = 0;
    let sellPrice = 0;

    for (let i = 0; i < prises.length; i++) {
        if (prises[i] < minPrice) {
            minPrice = prises[i];
        }

        const currentProfit = prises[i] - minPrice;
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
            buyPrice = minPrice;
            sellPrice = prises[i];
        }
    }

    return [buyPrice, sellPrice];
}


console.log(bestDeal(prises))