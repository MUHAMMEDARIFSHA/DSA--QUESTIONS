
// 189. Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// proper method which will work for all the leetcode scenarios
var rotate_1 = function(nums, k) {
 let rotatedArray = []
 for(let i=0;i<nums.length;i++){
    rotatedArray[(i + k) % nums.length] = nums[i]
 }

 for (let j = 0; j < nums.length; j++) {
    nums[j] = rotatedArray[j]
}
return nums
};

// if k is always less than length of the array we can use this method
var rotate = function(nums, k) {
   let slicedArray = nums.splice(nums.length-k,k)
    return [...slicedArray,...nums]
}

console.log(rotate(nums = [1,2,3,4,5,6,7], k = 3))