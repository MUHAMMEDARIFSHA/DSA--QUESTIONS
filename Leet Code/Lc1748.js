

// 1748. Sum of Unique Elements

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let set = new Set()
    let duplicates = new Set()
    let sum = 0
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            duplicates.add(nums[i])
        }
        else{
            set.add(nums[i])
            sum += nums[i]
        }
        
    }
    for(let num of duplicates){
        sum -= num
    }
    return sum
};
console.log(sumOfUnique([10,6,9,6,9,6,8,7]))