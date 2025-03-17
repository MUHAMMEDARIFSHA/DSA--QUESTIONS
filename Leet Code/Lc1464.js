// Given the array of integers nums, you will choose two 
// different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0),
//  you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

var maxProduct = function(nums) {
    let max = 0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
          let value = ((nums[i]-1)*(nums[j]-1))
          if(value>max){
              max= value
          }
        }
}
return max
}

console.log(maxProduct([3,4,5,2]));