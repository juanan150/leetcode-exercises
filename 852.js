/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let i = 0
    let done = false
    while (!done) {
        if (arr[i] > arr[i+1]){
            done = true
        } else {
            i++
        }
    }
    return i
};
