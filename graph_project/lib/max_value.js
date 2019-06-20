function maxValue(node, visited=new Set()) {
    const queue = [node];
    let max = -Infinity;
    while (queue.length) {
        let curr = queue.shift();
        if (visited.has(curr)) continue;
        visited.add(curr);
        if (curr.val > max) max = curr.val;
        curr.neighbors.forEach(neighbor => queue.push(neighbor));
    }
    return max;
}

module.exports = {
    maxValue
};