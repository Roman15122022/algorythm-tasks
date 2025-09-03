const peaks = [10.7, 17.1, 11.2, 13.5, 9.9, 14.9, 9.4, 9.4, 3.1, 12.7]

function countPeaks(values) {
    let count = 0
    
    for (let i = 1; i < values.length - 1; i++) {
        if (Math.abs(values[i] - values[i-1]) > 5 || Math.abs(values[i] - values[i+1]) > 5) {
            count++
        }
    }
    
    return count;
}

console.log(countPeaks(peaks))