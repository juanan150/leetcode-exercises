var LUPrefix = function(n) {
    this.set = new Set();
    this.n=n;
    for(let i=0;i<n;i++)
        this.set.add(i+1);
};
/** 
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function(video) {
    this.set.delete(video);
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function() {
    for(let item of this.set)
        return item-1;
    return this.n;
};
