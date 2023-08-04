/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const newW = wordDict.sort((a,b) => b.length - a.length)
    const wordDictString = wordDict.join('')
    const ob = {}
    for (let i = 0; i < s.length; i++){
        if (!wordDictString.includes(s[i])){
            return false
        }
    }
    const calc = (word, currW) => {
        if (word.length === 0){
            return true
        }
        let reg
        for (let i = 0; i < newW.length; i++){
            reg =  new RegExp(newW[i],"g");
            if (word.search(reg) === 0 && !ob[`${currW}${newW[i]}`]) {
                ob[`${currW}${newW[i]}`] = 1
                const found = calc(word.slice(newW[i].length), `${currW}${newW[i]}`)
                if (found) return true
            }
        }
        return false
    }
    return calc(s, '')
};
