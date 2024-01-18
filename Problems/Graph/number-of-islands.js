// Function to count the number of islands in a 2D grid
const numIslands = (grid, connectedComponents = 0) => {
  // Destructuring assignment to get the number of rows and columns in the grid
  const [rows, cols] = [grid.length, grid[0].length];

  // Loop through each cell in the grid
  for (let row = 0; row < rows; row++) {
    /* Time O(ROWS) */
    for (let col = 0; col < cols; col++) {
      /* Time O(COLS) */
      // Check if the current cell is part of an island
      const isIsland = grid[row][col] === "1";
      if (isIsland) connectedComponents++;

      // Perform Breadth-First Search (BFS) from the current cell
      bfs(
        grid,
        rows,
        cols,
        new Queue([[row, col]]),
      ); /* Space O(MIN(ROWS,COLS)) */
    }
  }

  // Return the total number of connected components (islands)
  return connectedComponents;
};

// Function to perform Breadth-First Search (BFS) from a given cell
const bfs = (grid, rows, cols, queue) => {
  // Continue BFS until the queue is empty
  while (!queue.isEmpty()) {
    // Loop through all elements currently in the queue
    for (let i = queue.size() - 1; 0 <= i; i--) {
      /* Time O(WIDTH) */
      // Dequeue the front element from the queue
      const [row, col] = queue.dequeue();

      // Check if the current cell is water; if so, skip to the next iteration
      const isWater = grid[row][col] === "0";
      if (isWater) continue;

      // Mark the current cell as visited (water)
      grid[row][col] = "0";

      // Enqueue neighbors of the current cell
      for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
        queue.enqueue([_row, _col]); /* Space O(MIN(ROWS,COLS)) */
      }
    }
  }
};

// Function to get neighboring cells of a given cell
const getNeighbors = (row, rows, col, cols) =>
  [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
    .map(([_row, _col]) => [row + _row, col + _col])
    .filter(
      ([_row, _col]) => 0 <= _row && _row < rows && 0 <= _col && _col < cols,
    );
