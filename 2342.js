var maximumSum = function (nums) {
    let res = -1
    // nums.sort((a, b) => b - a)
    const digits = {}
    for (let iterator of nums) {
        const digitsVal = getDigits(iterator)
        if (!digits[digitsVal]) {
            digits[digitsVal] = {
                lastMax: iterator,
                countNum: 1,
                maxNumber: iterator
            }
        } else {
            let lastMaxTemp = digits[digitsVal].lastMax
            if (digits[digitsVal].countNum === 1) {
                digits[digitsVal].countNum = 2
                digits[digitsVal].lastMax = Math.max(lastMaxTemp, iterator)
                digits[digitsVal].maxNumber = lastMaxTemp + iterator
            } else {
                if (iterator > lastMaxTemp) {
                    digits[digitsVal].lastMax = iterator
                    digits[digitsVal].maxNumber = lastMaxTemp + iterator
                } else {
                    const prevValue = digits[digitsVal].maxNumber - lastMaxTemp
                    digits[digitsVal].maxNumber = Math.max(prevValue, iterator) + lastMaxTemp
                }
            }
            res = Math.max(res, digits[digitsVal].maxNumber)
        }
    }
    return res
};

function getDigits(num) {
    const digits = num.toString().split("").reduce((acc, curr) => Number(acc) + Number(curr), 0)
    return digits
}
