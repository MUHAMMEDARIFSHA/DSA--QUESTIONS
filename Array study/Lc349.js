
// 349. Intersection of Two Arrays

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted

var intersection_1 = function (nums1, nums2) {
    let first = new Set()
    let second = new Set()
    let newArr = []
    for (let i = 0; i < nums1.length; i++) {
        if (!first.has(nums1[i])) {
            first.add(nums1[i])
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if (first.has(nums2[j])) {
            console.log(!second.has(nums2[j]))
            if (!second.has(nums2[j])) {
                second.add(nums2[j])
                newArr.push(nums2[j])
            }

        }
    }
    return newArr
};

var intersection = function (nums1, nums2) {
    let first = new Set(nums1)
    let second = new Set(nums2)
    let newArr = []
    for(let num of first){
        if(second.has(num)){
            newArr.push(num)
        }
    }
   
    return newArr
};


console.log(intersection(nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]))