// var largestValues = function(root) {
//     const arr = {}
//     const res = []
//     if (!root) return []
//     function traverse(root, lvl) {
//         arr[lvl] = arr[lvl] ? [...arr[lvl], root.val] : [root.val]
//         root.right && traverse(root.right, lvl+1)
//         root.left && traverse(root.left, lvl+1)
//     }
//     traverse(root, 1)
//     for (let curr of Object.values(arr)) {
//         res.push(Math.max(...curr))
//     }
//     return res
// };

function largestValues(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        let curr_level_size = queue.length;
        let max_val = Number.MIN_SAFE_INTEGER;
        
        for (let i = 0; i < curr_level_size; i++) {
            const node = queue.shift();
            max_val = Math.max(max_val, node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(max_val);
    }
    
    return result;
}
