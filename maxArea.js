/*Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 In this case, the max area of water (blue section) the container can contain is 49.*/

/*function maxArea(height) {
    let maxArea = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const max = Math.min(height[i], height[j]) * (j - i);

            if (max > maxArea) maxArea = max;
        }
    }

    return maxArea;
}*/

function maxArea2(arr) {
    let left = 0
    let right = arr.length - 1;
    let max = 0;

    while (left < right) {
        const leftValue = arr[left];
        const rightValue = arr[right];
        max = Math.max(max, Math.min(leftValue, rightValue) * (right - left));

        if (leftValue > rightValue) {
            right--
        } else {
            left++;
        }
    }

    return max;
}


console.log(maxArea2([4, 3, 2, 1, 4]))