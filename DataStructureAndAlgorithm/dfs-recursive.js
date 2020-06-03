class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(nameVertex) {
    if (!this.adjacencyList[nameVertex])
      this.adjacencyList = { ...this.adjacencyList, [nameVertex]: [] };
    return this.adjacencyList;
  }
  removeVertex(nameVertex) {
    if (this.adjacencyList[nameVertex])
      for (let property in this.adjacencyList) {
        this.removeEdge(nameVertex, property);
      }
    delete this.adjacencyList[nameVertex];
    return this.adjacencyList;
  }
  addEdge(vertexOne, vertexTwo) {
    if (!this.adjacencyList[vertexOne]) {
      this.addVertex(vertexOne);
    }
    if (!this.adjacencyList[vertexTwo]) {
      this.addVertex(vertexTwo);
    }
    this.adjacencyList[vertexOne].push(vertexTwo);
    this.adjacencyList[vertexTwo].push(vertexOne);
    return this.adjacencyList;
  }
  removeEdge(vertexOne, vertexTwo) {
    if (this.adjacencyList[vertexOne]) {
      const vertexOneValue = this.adjacencyList[vertexOne].filter(
        (value) => value !== vertexTwo
      );
      const vertexTwoValue = this.adjacencyList[vertexTwo].filter(
        (value) => value !== vertexOne
      );
      this.adjacencyList = {
        ...this.adjacencyList,
        [vertexOne]: vertexOneValue,
        [vertexTwo]: vertexTwoValue,
      };
    }
    return this.adjacencyList;
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = [];
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.depthFirstRecursive('A'));
