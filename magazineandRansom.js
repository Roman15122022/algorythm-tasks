const canConstruct = function(ransomNote, magazine) {
    const heshMagazine = magazine.split('').reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1

        return acc
    }, {})

    console.log(heshMagazine)



    for (const letter of ransomNote){
        console.log(letter)
        console.log(heshMagazine[letter])
        if(!heshMagazine[letter]) return false

        heshMagazine[letter] = heshMagazine[letter] - 1

    }

    return true
};


console.log(canConstruct('aa', 'aab'))