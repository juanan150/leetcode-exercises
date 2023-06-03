/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let sortedTree = {}
    let time = [0]
    for (let i = 0; i < manager.length; i++) {
        const emp = manager[i]
        if (emp !== -1) {
            sortedTree[emp] = sortedTree[emp] ? [...sortedTree[emp], i] :           [i]
        }
    }
    let managers = [[headID, informTime[headID]]]
    while (managers.length){
        const [manId, manTime] = managers.shift()
        if (sortedTree[manId]){
            for (let emp of sortedTree[manId]){
                managers.push([emp, manTime+informTime[emp]])
            }
        } else {
            time.push(manTime)
        }
    }

    return Math.max(...time)
};
