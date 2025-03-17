// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

var majorityElement = function(nums) {
   
    let largest=0
    let element
    if(nums.length===1){
        return nums[0]
    }
    for(let i=0;i<nums.length;i++){
        let count=1
         for(let j=i+1;j<nums.length;j++){
        if(nums[i]===nums[j]){
            console.log(count)
            count++
        }
        if(count>largest){
            largest = count
             element = nums[i]
        }
         }
    }
    return element
};
console.log(majorityElement([6,6,6,7,7]))