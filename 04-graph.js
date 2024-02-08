class Graph {
  constructor() {
    this.data = {};
  }

  addVertex(vertex) {
    if (!this.data[vertex]) {
      this.data[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.data[v1]) {
      this.addVertex(v1);
    }

    if (!this.data[v2]) {
      this.addVertex(v2);
    }

    this.data[v1].push(v2);
    this.data[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.data[v1] = this.data[v1].filter((item) => {
      return item != v2;
    });

    this.data[v2] = this.data[v2].filter((item) => {
      return item != v1;
    });
  }

  removeVertex(vertex){
    if(!this.data[vertex]){
        return;
    }
    else{
        for(let item of this.data[vertex]){
            this.removeEdge(vertex, item);
        }
        
        delete this.data[vertex];
    }
  }
}

let graph1 = new Graph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");

graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "C");
graph1.addEdge("B", "D");

// graph1.removeEdge("A", "C");
graph1.removeVertex("A");
console.log(graph1);
