var prevPermOpt1 = function(arr) {
    let maxNum = arr[0]
    let maxPos = 0
    let rightPos = -1, leftPos = -1, maxMinVal = -1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            maxNum = arr[i-1]
            maxPos = i-1
            maxMinVal = -1
        }
        if (arr[i] === maxNum) {
            maxPos = i
        }
        if (arr[i] < maxNum){
            leftPos = maxPos
            if (maxMinVal < arr[i]) rightPos = i, maxMinVal = arr[i]
        }
    }
    if (leftPos === -1) return arr
    const temp = arr[rightPos]
    arr[rightPos] = arr[leftPos]
    arr[leftPos] = temp
    return arr
};
