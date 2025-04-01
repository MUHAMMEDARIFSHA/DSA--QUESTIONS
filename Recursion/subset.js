// given an integer array give all the posible subset of that array

function subset(nums){
    let result =[]
    let temp =[]
    
    function recursiveSubset(nums,i){
        if(i===nums.length){
            return result.push([...temp])
        }
        temp.push(nums[i])
        recursiveSubset(nums,i+1)
        temp.pop()
        recursiveSubset(nums,i+1)   
    }
    recursiveSubset(nums,0)
    return result
}
console.log(subset([1,2,3]))