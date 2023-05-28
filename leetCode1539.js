// MAY 28

// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

 

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

var findKthPositive = function(arr, k) {
    let isObj ={}
    for(let i =0 ; i<arr.length;i++){
        isObj[arr[i]] = true
    }

    let count = 0
    let num =[]
    while (count<=k+arr.length){
        
        if(isObj[count]!== true){
            num.push(count)
           
        }
         count ++
    }
    return num[k]
     
};
console.log(findKthPositive( [2,3,4,7,11],k=5))