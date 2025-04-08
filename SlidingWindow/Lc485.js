// 485. Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.



// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0
    let currCount = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++
        }
        if (nums[i] != 1 || i === nums.length - 1) {
            maxCount = Math.max(maxCount, currCount)
            currCount = 0
        }
    }

    return maxCount

};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))