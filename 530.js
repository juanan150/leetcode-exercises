var getMinimumDifference = function(root) {
    let nums = []

    function checkDiff(tree){
        if (tree.left){
            newDiff=checkDiff(tree.left)
        }
        if (tree.right){
            newDiff=checkDiff(tree.right)
        }
        nums.push(tree.val)
    }

    checkDiff(root)
    nums.sort((a,b) => b-a)
    let diff = Math.abs(nums[1] - nums[0])
    for (let i = 2; i < nums.length; i++){
        diff = Math.min(diff, Math.abs(nums[i]-nums[i-1]))
    }
    return diff
};
