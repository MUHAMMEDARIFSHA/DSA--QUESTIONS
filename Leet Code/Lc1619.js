// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

// Answers within 10-5 of the actual answer will be considered accepted.

 

// Example 1:

// Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
// Output: 2.00000
// Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.

var trimMean = function(arr) {
    arr.sort((a, b) => a - b);
    let fivepl = arr.length * 0.05;
    let sum = 0;
    for (let i = fivepl; i < arr.length - fivepl; i++) {
      sum += arr[i];
    }
    let sumMax = sum / (arr.length - fivepl * 2);
  
    return sumMax;
  };
  console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]));