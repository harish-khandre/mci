// Function to check if given edges form a valid tree with 'n' nodes
const validTree = (n, edges) => {
  // Initialize an array to represent the disjoint set with 'n' elements
  const union = new Array(n).fill(-1);

  // Iterate through each edge in the input
  for (const [src, dst] of edges) {
    // Find the parent of the source and destination nodes in the disjoint set
    const [x, y] = [find(union, src), find(union, dst)];

    // Check if source and destination nodes have the same parent, indicating a cycle
    const hasCycle = x === y;
    if (hasCycle) return false;

    // Combine the disjoint sets of source and destination nodes
    compress(union, x, y);
  }

  // Check if the number of edges is exactly 'n - 1' to ensure connectivity
  const isValid = edges.length === n - 1;
  return isValid;
};

// Function to compress the disjoint set by updating the parent of a node
const compress = (union, i, head) => (union[i] = head);

// Function to find the root/parent of a node in the disjoint set
const find = (union, i, num = union[i]) => {
  // Check if the current node is empty (has no parent)
  const isEmpty = num === -1;
  if (isEmpty) return i;

  // Recursively find the root/parent of the current node and update the path compression
  const head = find(union, num);

  // Compress the path by updating the parent of the current node
  compress(union, i, head);

  // Return the root/parent of the current node
  return union[i];
};

// or

/**
 * https://leetcode.com/problems/graph-valid-tree/
 * Time O(E * a(N)) | Space O(V)
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree2 = function (n, edges, root = 0) {
  const isEqual = edges.length === n - 1;
  if (!isEqual) return false;

  const { graph, visited } = buildGraph(n, edges);

  dfs(root, graph, visited);

  return visited.size === n;
};

const initGraph = (n) => ({
  graph: new Array(n).fill().map(() => []),
  visited: new Set(),
});

const buildGraph = (n, edges) => {
  const { graph, visited } = initGraph(n);

  for (const [src, dst] of edges) {
    graph[src].push(dst);
    graph[dst].push(src);
  }

  return { graph, visited };
};

const dfs = (node, graph, visited) => {
  if (visited.has(node)) return;
  visited.add(node);

  for (const neighbor of graph[node]) {
    dfs(neighbor, graph, visited);
  }
};
