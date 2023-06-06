// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

 

// Example 1:

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

var canMakeArithmeticProgression = function(arr) {
     let newArr = arr.sort((a,b)=> a-b)
     console.log(newArr)
     let diff = newArr[1]-newArr[0]
     console.log(diff + "  diff");
     if(newArr.length ===3){
        if((newArr[2]-newArr[1])!==diff){
            return false
        }
     }
     else{
     for(let i=1;i<newArr.length-1;i++){
         let diff1 
         diff1 = newArr[i+1]-newArr[i]
         console.log(diff1  +" diff1")
         if(diff1 !== diff){
            return false
         }
     }}
     return true
};
// console.log(canMakeArithmeticProgression([3,5,1]))
// console.log(canMakeArithmeticProgression([1,2,4]))
console.log(canMakeArithmeticProgression([1,4,4,7]))