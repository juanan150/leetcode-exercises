var maximumSwap = function (num) {
    let maxNum = 0 
    let maxPos = -1
    let minPos = -1
    let rightPos = -1
    let numString = num.toString().split("")
    for (let i = numString.length-1; i >= 0; i--) {
        if (+numString[i] > maxNum) maxNum = +numString[i], maxPos = i
        if (+numString[i] < maxNum) minPos = i, rightPos = maxPos
    }

    if (minPos === -1) return num
    const temp = numString[rightPos]
    numString[rightPos] = numString[minPos]
    numString[minPos] = temp
    return parseInt(numString.join(""))

};
