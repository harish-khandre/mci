class Graph {
  // Represents a directed graph with weighted edges

  private vertices: number;
  private edges: Array<[number, number, number]>; // [source, destination, weight]

  constructor(vertices: number) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(source: number, destination: number, weight: number): void {
    // Adds a directed edge with a weight to the graph
    this.edges.push([source, destination, weight]);
  }

  bellmanFord(startVertex: number): [number[], number[]] | string {
    // Finds the shortest paths from the start vertex to all other vertices using Bellman-Ford algorithm

    // Step 1: Initialize distance and predecessor arrays
    const distance: number[] = Array(this.vertices).fill(
      Number.POSITIVE_INFINITY,
    );
    const predecessor: number[] = Array(this.vertices).fill(-1);

    distance[startVertex] = 0;

    // Step 2: Relax edges repeatedly
    for (let i = 0; i < this.vertices - 1; i++) {
      for (const [source, destination, weight] of this.edges) {
        if (distance[source] + weight < distance[destination]) {
          distance[destination] = distance[source] + weight;
          predecessor[destination] = source;
        }
      }
    }

    // Step 3: Check for negative weight cycles
    for (const [source, destination, weight] of this.edges) {
      if (distance[source] + weight < distance[destination]) {
        return "Graph contains negative weight cycle. Cannot find shortest paths.";
      }
    }

    // Return the distance and predecessor arrays
    return [distance, predecessor];
  }
}

// Example Usage:

const graph = new Graph(5);

// Add directed edges with weights
graph.addEdge(0, 1, 2);
graph.addEdge(0, 3, 6);
graph.addEdge(1, 3, 3);
graph.addEdge(1, 4, 1);
graph.addEdge(2, 0, 1);
graph.addEdge(2, 1, 4);
graph.addEdge(3, 2, 7);
graph.addEdge(3, 4, 5);
graph.addEdge(4, 0, 2);

const startVertex = 0;
const result = graph.bellmanFord(startVertex);

if (typeof result === "string") {
  console.log(result);
} else {
  const [distance, predecessor] = result;
  console.log(`Shortest distances from vertex ${startVertex}: ${distance}`);
  console.log(`Predecessor array: ${predecessor}`);
}
