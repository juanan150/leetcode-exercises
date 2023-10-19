var minimumTime = function (n, relations, time) {
    if (n === 1) return time[0]
    const graph = {}
    const in_degree = Array(n + 1).fill(0)
    for (let rels of relations) {
        if (!graph[rels[0]]) {
            graph[rels[0]] = []
        }
        graph[rels[0]].push(rels[1])
        in_degree[rels[1]]++
    }
    let dist = [0, ...time]
    let queue = []
    for (let i = 1; i <= n; i++) {
        if (in_degree[i] === 0) queue.push(i)
    }
    while (queue.length) {
        const course = queue.shift()
        if (graph[course]) {
            for (let nextCourse of graph[course]) {
                dist[nextCourse] = Math.max(dist[nextCourse], dist[course] + time[nextCourse - 1])
                in_degree[nextCourse]--
                if (in_degree[nextCourse] === 0) queue.push(nextCourse)
            }
        }
    }
    return Math.max(...dist)
