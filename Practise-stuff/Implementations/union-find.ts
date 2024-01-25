class UnionFind {
  private parent: number[];
  private rank: number[];

  // Constructor initializes the parent and rank arrays
  constructor(size: number) {
    this.parent = new Array(size);
    this.rank = new Array(size);

    // Initialize each element as a separate set with rank 0
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  // Find operation with path compression
  find(x: number): number {
    if (this.parent[x] !== x) {
      // Recursively find the root and update the parent for path compression
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  // Union operation with union-by-rank heuristic
  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      // Union by rank: attach the smaller rank tree to the root of the larger rank tree
      if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        // If ranks are equal, choose either root as the parent and increment the rank
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }

  // Check if two elements are in the same set
  isConnected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }
}

// Example usage:
const size = 5;
const unionFind = new UnionFind(size);

unionFind.union(0, 1);
unionFind.union(1, 2);
unionFind.union(3, 4);

console.log(unionFind.isConnected(0, 2)); // false
console.log(unionFind.isConnected(1, 3)); // false
console.log(unionFind.isConnected(2, 4)); // false
console.log(unionFind.isConnected(0, 1)); // true
