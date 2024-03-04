// Define a function 'cloneGraph' that takes a 'node' as input and returns a deep copy of the graph.
const cloneGraph = (node) => {
  // Create an object to keep track of visited nodes during traversal.
  const visited = {};
  // Define a recursive function 'dfs' for depth-first traversal and cloning.
  function dfs(node) {
    // Base case: If the current node is null, return null.
    if (!node) return node;
    // Check if the current node has been visited before; if so, return the cloned node.
    if (visited[node.val]) return visited[node.val];
    // Create a new node with the same value as the original node.
    const root = new Node(node.val);
    // Mark the original node as visited and store the cloned node in the 'visited' object.
    visited[node.val] = root;
    // Iterate through the neighbors of the original node and recursively clone them.
    for (const neighbor of node.neighbors) {
      // Connect the cloned neighbor to the cloned node.
      root.neighbors.push(dfs(neighbor));
    }
    // Return the cloned node.
    return root;
  }
  // Start the depth-first traversal from the input node and return the cloned graph.
  return dfs(node);
};
