var matrixSum = function(nums) {
    let score = 0
    for (let i = 0; i < nums.length; i++){
        nums[i] = nums[i].sort((a,b) => b-a)
    }
    for (let i = 0; i < nums[0].length; i++){
        let removed = 0
        for (let j = 0; j < nums.length; j++){
            removed = Math.max(removed, nums[j][i])
        }
        score += removed
    }
    return score
};
