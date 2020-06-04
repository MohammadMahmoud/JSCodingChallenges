class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(nameVertex) {
    if (!this.adjacencyList[nameVertex])
      this.adjacencyList = { ...this.adjacencyList, [nameVertex]: [] };
    return this.adjacencyList;
  }
  addEdge(vertexOne, vertexTwo, weight) {
    if (!this.adjacencyList[vertexOne]) {
      this.addVertex(vertexOne);
    }
    if (!this.adjacencyList[vertexTwo]) {
      this.addVertex(vertexTwo);
    }
    this.adjacencyList[vertexOne].push({ node: vertexTwo, weight });
    this.adjacencyList[vertexTwo].push({ node: vertexOne, weight });
    return this.adjacencyList;
  }
}

const g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addEdge('A', 'B', 9);
g.addEdge('A', 'C', 5);
g.addEdge('C', 'B', 7);
console.log(g.adjacencyList);
