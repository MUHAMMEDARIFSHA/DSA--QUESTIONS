

// selection sort
// find the min value of the un sorted array and push to sorted array
// i => represent sorted array 
// j => represent un-sorted array

function selectionSort(nums) {
    let l = nums.length
    for (let i = 0; i < l; i++) {
        let minIndex = i
        for (let j = i; j < l; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j
            }
        }
        if (minIndex != i) {
            [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]]
        }
    }
    return nums
}

console.log(selectionSort([1, 4, 7, 8, 3, 345, 56]))