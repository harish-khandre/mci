// Function to perform a depth-first search (DFS) on a weighted graph
// Returns true if a path from 'curr' to 'needle' is found, false otherwise
function walk(
  graph: WeightedAdjacencyList, // Weighted adjacency list representing the graph
  curr: number, // Current node in the traversal
  needle: number, // Target node to find
  seen: boolean[], // Array to track visited nodes
  path: number[], // Array to store the current path in the traversal
): boolean {
  // If the current node has already been visited, return false (avoid cycles)
  if (seen[curr]) return false;

  // Mark the current node as visited
  seen[curr] = true;

  // Add the current node to the path
  path.push(curr);

  // If the current node is the target node, return true (path found)
  if (curr === needle) {
    return true;
  }

  // Explore neighbors of the current node
  const list = graph[curr];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];
    // Recursively check if a path is found from the neighbor to the target node
    if (walk(graph, edge.to, needle, seen, path)) {
      return true;
    }
  }

  // If no path is found from the current node, backtrack by removing it from the path
  path.pop();

  // Indicate that no path to the target node was found from the current node
  return false;
}

// Main DFS function that initializes the necessary data structures and invokes the walk function
export default function dfs(
  graph: WeightedAdjacencyList, // Weighted adjacency list representing the graph
  source: number, // Starting node for the DFS
  needle: number, // Target node to find
): number[] | null {
  // Array to track visited nodes
  const seen: boolean[] = new Array(graph.length).fill(false);
  // Array to store the path in the traversal
  const path: number[] = [];

  // Invoke the walk function to perform DFS and check if a path to the target node is found
  walk(graph, source, needle, seen, path);

  // If no path is found, return null
  if (path.length === 0) {
    return null;
  }

  // Return the path if a valid path is found
  return path;
}
