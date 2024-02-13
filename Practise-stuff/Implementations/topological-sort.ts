// A topological ordering is an ordering of the nodes in a directed graph where for each directed edge from node A to node B, node A appears before node B in the ordering,

// Topological sort algorithm can find a topological ordering in O(V + E) time. And it is only implemented on Directed Acyclic Graph (DAG) as they don't have cycles

class Graph {
  private adjacencyList: Map<number, number[]>;

  constructor() {
    // The graph is represented using an adjacency list.
    this.adjacencyList = new Map();
  }

  addVertex(vertex: number): void {
    // Adds a vertex to the graph.
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(from: number, to: number): void {
    // Adds a directed edge from 'from' to 'to'.
    if (!this.adjacencyList.has(from) || !this.adjacencyList.has(to)) {
      throw new Error("Vertex not found in the graph");
    }

    this.adjacencyList.get(from)?.push(to);
  }

  topologicalSort(): number[] {
    const visited: Set<number> = new Set();
    const stack: number[] = [];

    // Helper function for depth-first search.
    const dfs = (vertex: number): void => {
      visited.add(vertex);

      // Explore neighbors of the current vertex.
      if (this.adjacencyList.has(vertex)) {
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        for (const neighbor of this.adjacencyList.get(vertex)!) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
      }

      // Push the current vertex to the stack after exploring neighbors.
      stack.push(vertex);
    };

    // Perform DFS for each unvisited vertex in the graph.
    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        dfs(vertex);
      }
    }

    // The stack contains the topological order, but it is reversed.
    // Reverse the stack to get the correct topological order.
    return stack.reverse();
  }
}

// Example Usage:
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

const topologicalOrder = graph.topologicalSort();
console.log("Topological Order:", topologicalOrder);
