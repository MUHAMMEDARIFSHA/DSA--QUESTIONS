// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

var duplicateZeros = function(arr) {
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===0){
            for(let j=arr.length-1;j>i;j--){
                arr[j]= arr[j-1]
                }
                arr[i+1] = 0
                i++
        }
      
    }
    return arr
};
console.log(duplicateZeros([1,0,2,3,0,4,5,0]))