// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array
//  such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

var containsNearbyDuplicate = function(nums, k) {
    for(let i=0 ;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                if((Math.abs(i-j))<=k){
                    return true
                }
            }
        }
    }
    return false
};
console.log(containsNearbyDuplicate([1,2,3,1],k=3))