var permuteUnique = function (nums) {
    const res = []

    function perm(arr, currArr) {
        if (!arr.length) {
            res.push(currArr)
        }
        const checked = []
        for (let i = 0; i < arr.length; i++) {
            if (!checked.includes(arr[i])){
                checked.push(arr[i])
                perm([...arr.slice(0, i), ...arr.slice(i + 1)], [...currArr, arr[i]])
            }
        }
    }
    perm(nums, [])
    return res
};
