// Function to find the maximum area of an island in a given grid
const maxAreaOfIsland = (grid) => {
  // Variable to store the maximum area
  let maxArea = 0;

  // Depth-First Search (DFS) function to explore the island and calculate its area
  const dfs = (row, col) => {
    // Base case: Check if the current cell is outside the grid boundaries or is water (0)
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[row].length ||
      grid[row][col] === 0
    ) {
      return 0;
    }

    // Mark the current cell as visited by changing its value to 0
    grid[row][col] = 0;

    // Initialize the count for the current island
    let count = 1;

    // Recursively explore neighboring cells (up, down, left, right) and accumulate the count
    count += dfs(row + 1, col);
    count += dfs(row - 1, col);
    count += dfs(row, col + 1);
    count += dfs(row, col - 1);

    // Return the total count for the current island
    return count;
  };

  // Loop through each cell in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Check if the current cell represents land (1)
      if (grid[i][j] === 1) {
        // Calculate the area of the island starting from this cell using DFS
        const area = dfs(i, j);

        // Update the maximum area if the current island's area is greater
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  // Return the maximum area of any island in the grid
  return maxArea;
};
