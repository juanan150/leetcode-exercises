var maxDistance = function(nums1, nums2) {
    let dist = 0
    for (let i = 0; i < nums1.length; i++){
        let j = nums2.length-1
        let found = false
        while (j >= i && !found) {
            if (nums2[j] >= nums1[i]) {
                dist = Math.max(dist, j-i)
                found = true
            } else {
                j--
            }
        }
    }
    return dist
};
