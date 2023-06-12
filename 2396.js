var isStrictlyPalindromic = function(n) {
    let baseN
    for (let i = 2; i <= n-2; i++){
        baseN = convertNum(n, i)
        if (baseN !== baseN.split('').reverse().join('')){
            return false
        }
    }
    return true
};

function convertNum(n, base) {
    let num = n
    let converted = ''
    while (num >= base){
        converted += num % base
        num = Math.floor(num/base)
    }
    converted += num
    return converted
}
