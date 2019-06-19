function breadthFirstSearch(startingNode, targetVal, visited = new Set()) {
    const queue = [startingNode];

    while (queue.length) {
        let node = queue.shift();
        if (visited.has(node)) continue;
        visited.add(node);
        if (node.val === targetVal) return node;
        node.neighbors.forEach(neighbor => queue.push(neighbor));
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};