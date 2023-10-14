var maxRepOpt1 = function (text) {
    const tested = {}
    let maxC = 0
    for (let i = 0; i < text.length; i++) {
        let currL = text[i]
        if (!tested[currL]) {
            let count = 1
            let spaces = 0
            tested[currL] = {
                chains: [],
                spaces: []
            }
            for (let j = i + 1; j < text.length; j++) {
                if (text[j] === currL) {
                    count++
                    if (spaces > 0) {
                        tested[currL].spaces.push(spaces)
                        spaces = 0
                    }
                } else {
                    if (count > 0) {
                        tested[currL].chains.push(count)
                        count = 0
                    }
                    spaces++
                }
            }
            if (count > 0) {
                tested[currL].chains.push(count)
            }
        }
    }
    for (let c in tested) {
        let max
        const currC = tested[c].chains
        const currS = tested[c].spaces
        let maxChain = Math.max(...currC)
        for (let i = 0; i < currS.length; i++) {
            if (currS[i] === 1) {
                if (currC.length > 2) {
                    max = currC[i] + currC[i + 1] + 1
                } else {
                    max = currC[i] + currC[i + 1]
                }
                maxC = Math.max(max, maxC)
            }
        }
        if (!max || max <= maxChain) {
            if (currC.length > 1) {
                maxChain ++
                maxC = Math.max(maxC, maxChain)
            } else {
                maxC = Math.max(maxC, ...currC)
            }
        }
    }
    return maxC
};
