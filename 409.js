/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const letts = {}

    for (let letter of s) {
        letts[letter] = letts[letter] + 1 || 1
    }

    let hasOdd = false
    let count = 0
    for (let i of Object.entries(letts)) {
        if (i[1] % 2 === 0) {
            count += i[1]
        } else {
            count += i[1] - 1
            hasOdd = true
        }
    }
    if (hasOdd) {
        count++
    }

    return count
};
