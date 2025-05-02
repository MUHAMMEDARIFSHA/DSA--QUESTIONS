// insertion sort
// travel from left to right compare the adjucent values and swap if needed


const insertionSort = (nums) => {
    let l = nums.length
    for (let i = 1; i < l; i++) {
        let curr = nums[i]
        let j = i - 1
        while (j >= 0 && nums[j] > curr) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = curr
    }
    return nums
}

console.log(insertionSort([1, 5, 3, 6, 45, 75, 242, 4]))