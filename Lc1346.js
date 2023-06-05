// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
 

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]


var checkIfExist = function(arr) {
    for(let i=0; i<arr.length;i++){
        for(let j=(i+1);j<arr.length;j++){
            console.log(arr[i] , arr[j]*2)
            if(arr[i]===(2*arr[j])){
                return true
            }
            if((2*arr[i])===arr[j]){
                return true
            }
        }
    }
    return false
};
// console.log(checkIfExist([10,2,5,3]))
 console.log(checkIfExist([7,1,14,11]))
// console.log(checkIfExist([-2,0,10,-19,4,6,-8]))