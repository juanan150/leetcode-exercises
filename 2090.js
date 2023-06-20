var getAverages = function(nums, k) {
    let sum = 0
    let res = []
    if (nums.length > k*2){
        for (let i = 0; i <= k*2; i++){
            sum += nums[i]
        }
    }
    for (let i = 0; i < nums.length; i++){
        if (i < k){
            res.push(-1)
        } else if(i >= nums.length - k){
            res.push(-1)
        } else {
            res.push(Math.floor(sum/(k*2+1)))
            sum -= nums[i-k]
            sum += nums[i+k+1]
        }
    }
    return res
};
