function minimumSubArraySum (target, nums) {
    let minLen = Infinity
    let left = 0
    let sum = 0

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]

        while (sum >= target) {
            sum -= nums[left]
            minLen = Math.min(minLen, right - left + 1)
            left++
        }
    }

    return minLen === Infinity ? 0 : minLen
}

console.log(minimumSubArraySum(5, [1,2,3,4]))