class UnionFind {
  // Constructor initializes the parent and rank arrays for the union-find structure
  constructor(size) {
    this.parent = new Array(size + 1).fill().map((_, index) => index); // Parent array for each node
    this.rank = new Array(size + 1).fill(1); // Rank array to keep track of the depth of each tree
  }
  // Find operation with path compression
  find(node) {
    if (node !== this.parent[node]) {
      this.parent[node] = this.find(this.parent[node]); // Path compression
    }
    return this.parent[node];
  }
  // Union operation with union by rank
  union(src, dst) {
    const rootSrc = this.find(src);
    const rootDst = this.find(dst);

    if (rootSrc === rootDst) {
      return false; // Cycle detected, nodes are already in the same set
    }

    // Union by rank
    if (this.rank[rootSrc] > this.rank[rootDst]) {
      this.parent[rootDst] = rootSrc; // Attach smaller rank tree under root of higher rank tree
    } else if (this.rank[rootSrc] < this.rank[rootDst]) {
      this.parent[rootSrc] = rootDst; // Attach smaller rank tree under root of higher rank tree
    } else {
      this.parent[rootDst] = rootSrc; // Arbitrary choice, attach one tree under the other
      this.rank[rootSrc]++; // Increase rank of the new root
    }

    return true; // Nodes are successfully united
  }
}

const findRedundantConnection = (edges) => {
  const size = edges.length;
  const uf = new UnionFind(size);

  for (const [src, dst] of edges) {
    if (!uf.union(src, dst)) {
      return [src, dst]; // Redundant connection found, return the edges
    }
  }

  return [-1, -1]; // No redundant connection found
};

//#######################################[ Other maybe faster and easy ]#################################################

const findRedundantConnection2 = (edges) => {
  parent = {}; // Object to store parent relationships

  // Initialize each node as its own parent
  for (let i = 0; i <= edges.length; i++) {
    parent[i] = i;
  }

  // Iterate over each edge in the graph
  for (const [s, d] of edges) {
    // Find the parent of the source and destination nodes
    const ps = find(s);
    const pd = find(d);

    // Check if adding the edge would create a cycle
    if (ps === pd) {
      return [s, d]; // Return the redundant connection
    }

    // Merge the sets represented by source and destination nodes
    parent[pd] = ps;
  }

  return null; // If no redundant connection found, return null
};

// Recursive function to find the root parent of a node
function find(node) {
  if (parent[node] === node) return node;
  return find(parent[node]);
}
