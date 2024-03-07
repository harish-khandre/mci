const swimInWater = (grid) => {
  const n = grid.length; // Size of the grid
  let left = 0,
    right = n * n - 1; // Initializing left and right pointers for binary search

  // Binary search loop to find the minimum time
  while (left < right) {
    const mid = Math.floor((left + right) / 2); // Calculating the middle time
    if (canReach(grid, mid)) {
      // Checking if it's possible to reach the destination within 'mid' time
      right = mid; // Updating right pointer if possible
    } else {
      left = mid + 1; // Updating left pointer if not possible
    }
  }

  return left; // Returning the minimum time found
};

const canReach = (grid, time) => {
  const n = grid.length; // Size of the grid
  const visited = Array.from({ length: n }, () => Array(n).fill(false)); // Array to keep track of visited cells

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // Possible movement directions

  // Depth-first search function to explore reachable cells
  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= n ||
      col < 0 ||
      col >= n ||
      visited[row][col] ||
      grid[row][col] > time
    ) {
      return false; // Return false if cell is out of bounds, already visited, or elevation exceeds time constraint
    }

    visited[row][col] = true; // Marking the cell as visited

    if (row === n - 1 && col === n - 1) {
      return true; // Return true if destination is reached
    }

    // Recursively explore adjacent cells
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (dfs(newRow, newCol)) {
        return true; // Return true if destination is reached through adjacent cell
      }
    }

    return false; // Return false if destination is not reached through any adjacent cell
  };

  return dfs(0, 0); // Start DFS from the top-left corner of the grid
};
