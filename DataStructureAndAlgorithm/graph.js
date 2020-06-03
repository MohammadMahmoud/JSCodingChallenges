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
}

const g = new Graph();
console.log(g.addVertex('Hamburg'));
console.log(g.addEdge('Hamburg', 'München'));
console.log(g.addEdge('Hamburg', 'Berlin'));
console.log(g.addEdge('Hamburg', 'Cairo'));
console.log(g.addEdge('Berlin', 'München'));
console.log(g.addEdge('Berlin', 'Cairo'));
console.log(g.removeEdge('München', 'Hamburg'));
console.log(g.removeVertex('Hamburg'));
