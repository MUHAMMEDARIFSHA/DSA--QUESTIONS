// You are given a 0-indexed integer array nums and an integer k. Your task is to perform the following operation exactly k times in order to maximize your score:

// Select an element m from nums.
// Remove the selected element m from the array.
// Add a new element with a value of m + 1 to the array.
// Increase your score by m.
// Return the maximum score you can achieve after performing the operation exactly k times.

 

// Example 1:

// Input: nums = [1,2,3,4,5], k = 3
// Output: 18
// Explanation: We need to choose exactly 3 elements from nums to maximize the sum.
// For the first iteration, we choose 5. Then sum is 5 and nums = [1,2,3,4,6]
// For the second iteration, we choose 6. Then sum is 5 + 6 and nums = [1,2,3,4,7]
// For the third iteration, we choose 7. Then sum is 5 + 6 + 7 = 18 and nums = [1,2,3,4,8]
// So, we will return 18.
// It can be proven, that 18 is the maximum answer that we can achieve.


// var maximizeSum = function(nums, k) {
//     let i = 0
//     let sum =0
//     while(i!=k){
//         console.log(i);
//         const[max,index] = largest(nums)
//         sum += max
//         nums[index] = max+1
//         i++
//     }
//    return sum
    
// };

// function largest(array){
//     let index =0
//     let largest = array[0]
//     for(let i = 0;i<array.length;i++){
//  if(largest<array[i]){
//     largest = array[i]
//     index = i
//  }
//     }
//     return [largest,index]
// }
// console.log(maximizeSum([1,2,3,4,5],k=3))



//  js method
var maximizeSum = function(nums, k) {
  
    const max = Math.max(...nums)
       return  (max*k)+ (k)
    
};
console.log(maximizeSum([1,2,3,4,5],k=3))