// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.



// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let left = 0
    let average = -Infinity
    let currentSum = 0
    for (let right = 0; right < nums.length; right++) {
        while (right - left >= k) {
            currentSum -= nums[left]
            left++
        }
        currentSum += nums[right]
        if ((right - left + 1) === k) {
            let currAvr = currentSum / k
            average = Math.max(average, currAvr)

        }

    }
    return average

};

console.log(findMaxAverage([3, 3, 4, 3, 0], k = 3))