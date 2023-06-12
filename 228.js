var summaryRanges = function(nums) {
    let res = []
    let pending = []
    if (nums.length < 2){
        return nums.map(n => `${n}`)
    }
    for (let i = 0; i < nums.length-1; i++){
        if (nums[i] === nums[i+1]-1){
            pending.push(nums[i])
        } else {
            if (pending.length){
                res.push(`${pending[0]}->${nums[i]}`)
                pending = []
            } else {
                res.push(`${nums[i]}`)
            }
        }
    }
    if(pending.length){
        res.push(`${pending[0]}->${nums[nums.length-1]}`)
    } else {
        res.push(`${nums[nums.length-1]}`)
    }

    return res
};
