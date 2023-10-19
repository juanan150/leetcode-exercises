var minMoves2 = function(nums) {
    nums.sort((a,b) => a-b)
    const median = nums[Math.floor(nums.length/2)]
    let sum = 0
    for (let i = 0; i < nums.length; i++){
        sum += Math.abs(median - nums[i])
    }
    return sum
}
