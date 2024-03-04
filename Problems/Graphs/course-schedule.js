// Function to determine if it is possible to finish all courses with given prerequisites
const canFinish = (numCourses, prerequisites) => {
  // Build new graph using an adjacency list representation
  const graph = new Array(numCourses).fill(0).map(() => []);

  // Populate the graph with prerequisites data using a for loop
  for (let i = 0; i < prerequisites.length; i++) {
    const [a, b] = prerequisites[i];
    graph[b].push(a); // Directed edge from b to a, indicating a prerequisite relationship
  }

  // Arrays to keep track of visited nodes and nodes in the current recursion stack
  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  // Depth First Search (DFS) function to check for cycles in the graph
  const dfs = (node) => {
    // If the node is already in the current recursion stack, a cycle is detected
    if (recStack[node]) return false;

    // If the node has already been visited and does not have any unresolved dependencies, return true
    if (visited[node]) return true;

    // Mark the node as visited and push it to the recursion stack
    recStack[node] = true;
    visited[node] = true;

    // Recursively visit neighbors and check for cycles
    for (const neighbor of graph[node]) {
      if (!dfs(neighbor)) return false;
    }

    // Remove the node from the recursion stack after processing its neighbors
    recStack[node] = false;

    // Return true, indicating that the node and its dependencies are successfully processed
    return true;
  };

  // Iterate through each node and perform DFS if not visited
  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      // If a cycle is detected, return false
      if (!dfs(i)) return false;
    }
  }

  // If all nodes are successfully processed without cycles, return true
  return true;
};
