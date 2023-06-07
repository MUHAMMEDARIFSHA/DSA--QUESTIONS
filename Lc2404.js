// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

 

// Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.

var mostFrequentEven = function(nums) {
   
    let mostcount =0
    let larger = null
  
    for(let i=0;i<nums.length;i++){
        let count =1
       if(nums[i]%2===0){
         console.log("0 is even")
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]===nums[j]){
                    console.log("0 is count")
                    count++
                }
               }
               if(count>mostcount){
                mostcount =count
                larger =nums[i]
            }
                if(count===mostcount){
                  if(nums[i]<larger){
                    larger = nums[i]
                  }
            }
        
    }
    }
  
  
        if(larger==null){
            return -1
        }
        else{
            return larger
        }
    
   
    
    
};
// console.log(mostFrequentEven([0,1,2,2,4,4,1,6,6]))
console.log(mostFrequentEven([0,0,0,0]))
