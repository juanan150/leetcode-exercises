var minimumDeletions = function (nums) {
  // [0,1,8,-2,-3,-4,19,5]

  let min = Number.MAX_SAFE_INTEGER
  let max = -Number.MAX_SAFE_INTEGER
  let minPos = 0
  let maxPos = 0
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i]
      minPos = i
    }
    if (nums[i] > max) {
      max = nums[i]
      maxPos = i
    }
  }
  //maxPos = 6
  //minPos = 5

  let isMaxLeft = maxPos < Math.floor(nums.length / 2)
  // isMaxLeft = false
  let isMinLeft = minPos < Math.floor(nums.length / 2)
  // isMinLeft = false

  if (isMaxLeft === isMinLeft) {
    const maxIndex = isMaxLeft ? Math.max(maxPos, minPos) : Math.min(maxPos, minPos)
    // maxIndex = 5
    if (isMaxLeft) {
      result += maxIndex + 1
    } else {
      result += (nums.length - maxIndex)
      // result = 3
    }
  } else {
    let valMax, valMin
    if (isMaxLeft) {
      result += maxPos + 1
      valMax = (nums.length - maxPos)
    } else {
      result += (nums.length - maxPos)
      valMax = maxPos + 1
    }
    if (isMinLeft) {
      result += minPos + 1
      valMin = (nums.length - minPos)
    } else {
      result += (nums.length - minPos)
      valMin = minPos + 1
    }
    result = Math.min(Math.min(valMax,valMin), result)
  }

  return result
};
