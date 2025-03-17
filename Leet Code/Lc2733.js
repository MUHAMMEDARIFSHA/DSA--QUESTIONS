// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

// Return the selected integer.

 

// Example 1:

// Input: nums = [3,2,1,4]
// Output: 2
// Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.

// var findNonMinOrMax = function(nums) {
//     if(nums.length<=2){
//         return -1
//     }
//     else{
//         const nums1 = nums.sort((a,b)=>a-b)
//         return nums1[1]
//     }
// };
// console.log(findNonMinOrMax([3,2,1,4]))
