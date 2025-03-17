


// NOT DONE 


// Given an array nums of integers, return the length of the longest arithmetic subsequence in nums.

// Note that:

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
// A sequence seq is arithmetic if seq[i + 1] - seq[i] are all the same value (for 0 <= i < seq.length - 1).
 

// Example 1:

// Input: nums = [3,6,9,12]
// Output: 4
// Explanation:  The whole array is an arithmetic sequence with steps of length = 3.
// Example 2:

// Input: nums = [9,4,7,2,10]
// // Output: 3
// // Explanation:  The longest arithmetic subsequence is [4,7,10].



// var longestArithSeqLength = function(nums) {
//     let difference ={}
//     for(let i=0;i<nums.length;i++){
//         for(let j =i+1 ;j<nums.length;j++){
//         let diff = Math.abs(nums[j]-nums[i])
//         if(difference[diff]===undefined){
//             difference[diff] = 1
//         }
//         else{
//             difference[diff] +=1 
//         }
//         }
//     }
// console.log(difference)
//     let maxKey = null;
// let maxValue = Number.NEGATIVE_INFINITY;

// for (const [key, value] of Object.entries(difference)) {
//   if (value > maxValue) {
//     maxValue = value;
//     maxKey = key;
//   }
// }
// return maxValue

// };

// // console.log(longestArithSeqLength([3,6,9,12]))

// // console.log(longestArithSeqLength([9,4,7,2,10]))
// // console.log(longestArithSeqLength([20,1,15,3,10,5,8]))
// console.log(longestArithSeqLength([83,20,17,43,52,78,68,45]))