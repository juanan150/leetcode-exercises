var removeDuplicates = function(nums) {
    let i = 0
    const counter = {}
    while(i <nums.length) {
        if (counter[nums[i]] === 2) {
            nums.splice(i,1)
        } else {
            counter[nums[i]] = counter[nums[i]] + 1 || 1
            i++
        }
    }
    return nums.length
};
