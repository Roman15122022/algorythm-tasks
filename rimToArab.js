// X -> 10
// VII -> 7
// I
// II
// III
// IV
// V
// VI
// VII
// VIII
// IX
// X


function romanToArabic2(roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentSymbol = roman[i];
        const currentValue = romanNumerals[currentSymbol];
        const nextValue = romanNumerals[roman[i + 1]];

        if (nextValue && nextValue > currentValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }

    return result;
}

console.log(romanToArabic2('IX'))
