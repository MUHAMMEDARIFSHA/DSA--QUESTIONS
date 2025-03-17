// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


var searchInsert = function(nums, target) {
    let n = nums.length
    if(n==1 && nums[0]==target) return 0
  const index=  search(nums,target,0,n-1)
    return  index
}

var search = function(nums,target,left,right){
      if(left>right) return left ;

let mid = Math.floor((left +right)/2)
    if(nums[mid]===target){
        return mid
    }
    if(target>nums[mid]){
        
        return search(nums,target,mid+1,right)
        }
    else{
        return search(nums,target,left,mid-1)
    }
}

console.log(searchInsert(nums=[1,3,5,6],target= 7));