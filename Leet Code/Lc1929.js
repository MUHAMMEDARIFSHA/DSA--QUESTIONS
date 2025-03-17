// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]


var getConcatenation = function(nums) {
    let ans=[]
    let n =nums.length
    for(let i=0;i<nums.length;i++){
       ans[i] = nums[i]
       ans[n+i] = nums[i]
    }
    return ans
};

console.log(getConcatenation([1,2,1]));