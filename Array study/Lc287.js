// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and using only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3
 

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n^2)
var findDuplicate_1 = function(nums) {
    for(let i = 0;i< nums.length;i++){
        for(let j= i+1;j<nums.length;j++){
            if(nums[i] === nums[j]){
                return nums[i]
            }
        }
    }
};
// O(n) onl;y for the specific question if the array contains only value from [1,n]
function findDuplicate_2(nums) {
    // Phase 1: Detect the cycle
    let slow = nums[0];
    let fast = nums[0];
  
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
      console.log(slow,fast)
    } while (slow !== fast);
  
    // Phase 2: Find the entrance of the cycle
    fast = nums[0];
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
  
    return slow;
  }


  function findDuplicate(nums){
    let seen = new Set()
    for(let num of nums){
        if(seen.has(num)){
            return num
        }
        seen.add(num)
    }
  }
console.log(findDuplicate([1,3,12,4,2,2,10222,43,2342]))
let nums = [1,3,12,4,2,2,10222,43,2342]
let arr = Array(nums.length).fill(0);
console.log("arr",arr)