/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    const perm = (arr, currArr) => {
        if (currArr.length === nums.length){
            res.push(currArr)
            return
        }
        for (let i = 0; i < arr.length; i++){
            perm([...arr.slice(0,i), ...arr.slice(i+1)], [...currArr, arr[i]])
        }
    }
    perm(nums, [])
    return res
};
