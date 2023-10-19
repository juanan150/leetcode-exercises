var backspaceCompare = function (s, t) {
    // const length = Math.max(s.length, t.length)
    const sArray = []
    const tArray = []
    function mapString(array, str) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== "#") {
                array.push(str[i])
            } else {
                array.pop()
            }
        }
        return array.join("")
    }

    return mapString(sArray, s) === mapString(tArray, t)
};
