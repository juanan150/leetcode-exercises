var checkStraightLine = function (coordinates) {
    let slope
    if (coordinates[1][0] - coordinates[0][0] !== 0) {
        slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])
    }
    for (let i = 2; i < coordinates.length; i++) {
        const coord = coordinates[i]
        const prevCoord = coordinates[i - 1]
        if (coordinates[1][0] - coordinates[0][0] !== 0) {
            if ((coord[1] - prevCoord[1]) / (coord[0] - prevCoord[0]) !== slope) {
                return false
            }
        } else {
            if (coord[0] - prevCoord[0] !== 0) {
                return false
            }
        }
    };
    return true
}
