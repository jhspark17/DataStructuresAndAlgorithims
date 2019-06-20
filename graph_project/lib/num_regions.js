function numRegions(graph) {
	let count = 0;
	const visit = new Set();
	for (let node in graph) {
		if (dfsSearch(node, graph, visit)) count++;
	}
	return count
}

const dfsSearch = (node, graph, visit) => {
	if (visit.has(node)) return false;
	visit.add(node);
	graph[node].forEach(neighbor => dfsSearch(neighbor, graph, visit));
	return true;
}


module.exports = {
    numRegions 
};