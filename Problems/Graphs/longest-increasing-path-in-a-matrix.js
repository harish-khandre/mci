function longestIncreasingPath(matrix) {
  // Check if the input matrix is empty
  if (!matrix.length) return 0;

  // Get the number of rows and columns
  const rows = matrix.length,
    cols = matrix[0].length;

  // Define the four possible directions to move
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // Initialize a 2D array to store memoized results
  const memo = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

  // Define the DFS function
  const dfs = (row, col) => {
    // Check if the result for this cell is already memoized
    if (memo[row][col] !== 0) return memo[row][col];

    // Initialize maxPath to 1 (since the current cell is part of any increasing path)
    let maxPath = 1;

    // Explore all four neighboring cells
    for (const [dx, dy] of directions) {
      const newRow = row + dx,
        newCol = col + dy;

      // Check if the neighboring cell is within the matrix bounds and has a greater value
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        matrix[newRow][newCol] > matrix[row][col]
      ) {
        // Update maxPath with the maximum of maxPath and 1 + dfs(newRow, newCol)
        maxPath = Math.max(maxPath, 1 + dfs(newRow, newCol));
      }
    }

    // Memoize the maximum length of an increasing path starting from the current cell
    memo[row][col] = maxPath;
    return maxPath;
  };

  // Initialize maxPath to keep track of the longest increasing path found so far
  let maxPath = 0;

  // Iterate over all cells in the matrix
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Update maxPath with the maximum of maxPath and dfs(row, col)
      maxPath = Math.max(maxPath, dfs(row, col));
    }
  }

  // Return the length of the longest increasing path
  return maxPath;
}
