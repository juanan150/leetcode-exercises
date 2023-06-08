/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    let binA = convertToBinary(a)
    let binB = convertToBinary(b)
    let binC = convertToBinary(c)
    let flips = 0
    const maxL = Math.max(binA.length, binB.length, binC.length)
    while (binA.length < maxL) {
        binA = "0" + binA
    }
    while (binB.length < maxL) {
        binB = "0" + binB
    }
    while (binC.length < maxL) {
        binC = "0" + binC
    }
    console.log(binA, binB, binC)
    for (let i = 0; i < maxL; i++) {
        if (binC[i] === '1') {
            if ((binA[i] === '1' || binB[i] === '1')) {

            } else {
                flips++
            }
        } else {
            if ((binA[i] === '0' && binB[i] === '0')) {

            } else {
                if (binA[i] === '1') flips++
                if (binB[i] === '1') flips++
            }
        }
    }

    return flips
};

function convertToBinary(num) {
    let a = num
    let bin = []
    while (a >= 2) {
        bin.push(a % 2)
        a = Math.floor(a / 2)
    }
    bin.push(a)
    return bin.reverse().join("")
}
