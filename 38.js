var countAndSay = function(n) {
    if (n === 1 ) return "1"
    const numbers = countAndSay(n-1)
    let count = 0
    let result = ""
    let currChar = numbers[0]
    for (let char of numbers) {
      if (char === currChar) {
        count++
      } else {
        result += `${count.toString()}${currChar}`
        currChar = char
        count = 1
      }
    }
    result += `${count.toString()}${currChar}`
    return result
};
