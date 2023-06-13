/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let found = {}
    let count = 0
    for (let i = 0; i < grid.length; i++){
        if (found[grid[i].join(',')]){
            count += found[grid[i].join(',')]
            continue
        }
        for (let j = 0; j < grid.length; j++){
            let col = ''
            for (let k = 0; k < grid.length; k++){
                col += grid[k][j]
                k === grid.length - 1 ? null : col += ','
            }
            if (grid[i].join(',') === col){
                count++
                found[col] ? found[col] ++ : found[col] = 1
            }
        }
    }
    return count
};
