var setZeroes = function(matrix) {
    const rows = new Set()
    const cols = new Set()
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            if (matrix[i][j] === 0) {
                rows.add(i)
                cols.add(j)
            }
        }
    }
    for (let item of rows) {
        matrix[item] = Array(matrix[0].length).fill(0)
    }
    for (let item of cols) {
        for (let i = 0; i < matrix.length; i++){
            matrix[i][item] = 0
        }
    }
};
