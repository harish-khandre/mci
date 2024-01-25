class FloydWarshall {
  private readonly INF: number = Number.MAX_SAFE_INTEGER;

  // Function to perform the Floyd-Warshall algorithm
  public floydWarshall(graph: number[][]): number[][] {
    const n = graph.length;

    // Create a copy of the input graph to avoid modifying the original
    const dist: number[][] = graph.map((row) => row.slice());

    // Iterate through all vertices and find the shortest paths
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          // If vertex k is on the shortest path from i to j, update the distance
          if (
            dist[i][k] !== this.INF &&
            dist[k][j] !== this.INF &&
            dist[i][k] + dist[k][j] < dist[i][j]
          ) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
    return dist;
  }
}

// Example Usage
const floydWarshallInstance = new FloydWarshall();

// Example graph represented as an adjacency matrix
const graph: number[][] = [
  [0, 5, this.INF, 10],
  [this.INF, 0, 3, this.INF],
  [this.INF, this.INF, 0, 1],
  [this.INF, this.INF, this.INF, 0],
];

// Call the Floyd-Warshall algorithm
const result = floydWarshallInstance.floydWarshall(graph);

// Display the result
console.log("Shortest distances between every pair of vertices:");
console.log(result);
