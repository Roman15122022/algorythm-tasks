function lengthOfLongestSubstring (str) {
    let maxLen = 0
    let left = 0
    const setCollection = new Set()

    for(let right = 0; right < str.length; right++){
        while(setCollection.has(str[right])){
            setCollection.delete(str[left])
            left++
        }

        setCollection.add(str[right])

        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen
}