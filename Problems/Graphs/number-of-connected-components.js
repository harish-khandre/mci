/**
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 * Time O(V + E) | Space O(V + E)
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// Function to count connected components in an undirected graph
const countComponents = (n, edges, count = 0) => {
  // Build the graph and initialize visited array
  const { graph, visited } = buildGraph(n, edges);

  // Traverse each node in the graph
  for (const node in graph) {
    // If the current node has a path (is part of a connected component), increment count
    if (hasPath(graph, node, visited)) count++;
  }

  // Return the total count of connected components
  return count;
};

// Helper function to initialize an empty graph and visited array
const initGraph = (n) => ({
  graph: new Array(n).fill().map(() => []), // Create an array of empty arrays for each node
  visited: new Array(n).fill(false), // Initialize visited array with false for each node
});

// Helper function to build the graph from the given edges
const buildGraph = (n, edges) => {
  // Initialize the graph and visited array
  const { graph, visited } = initGraph(n);

  // Add edges to the graph (undirected graph)
  for (const [src, dst] of edges) {
    graph[src].push(dst);
    graph[dst].push(src);
  }

  // Return the graph and visited array
  return { graph, visited };
};

// Helper function to check if there is a path from the current node in the graph
const hasPath = (graph, current, visited) => {
  // If the current node is already visited, return false
  if (visited[current]) return false;

  // Mark the current node as visited
  visited[current] = current;

  // Traverse neighbors of the current node recursively
  for (const neighbor of graph[current]) {
    hasPath(graph, neighbor, visited);
  }

  // Return true as there is a path from the current node
  return true;
};
