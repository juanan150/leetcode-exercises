/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let minL = ""
    for (let lett of letters){
        if (lett > target && (!minL || lett < minL)){
            minL = lett
        }
    }
    return minL || letters[0]
};
