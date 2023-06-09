// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

 

// Example 1:

// Input: nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.

var canBeIncreasing = function(nums) {
    let count =0
    let count1=0
    for(let i=0;i<nums.length;i++){
       if(nums[i] >=nums[i+1]){
        console.log(nums[i]  ,"  " , nums[i+1] )
          count++
          console.log(count);
       }
       if((nums[i]<=nums[i-2])){
  count1++
       }
    }
    if(count>1||count1>1){
        return false
    }
    else{
        return true
    }
};

// console.log(canBeIncreasing([1,2,10,5,7]))
// console.log(canBeIncreasing([104,924,32,968]))
// console.log(canBeIncreasing([2,3,1,2]))
console.log(canBeIncreasing([2,3,4,5,1,5]))