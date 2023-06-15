var maxLevelSum = function(root) {
    let sum = {1: root.val}
    function runTree(tree, lvl){
        if (!tree){
            return
        }
        sum[lvl] = sum[lvl] + tree.val || tree.val
        runTree(tree.right, lvl + 1)
        runTree(tree.left, lvl + 1)
    }
    runTree(root.right, 2)
    runTree(root.left, 2)

    return Object.entries(sum).reduce((max,curr)=> max[1] >= curr[1] ? max : curr, [1,sum[1]])[0]
};
