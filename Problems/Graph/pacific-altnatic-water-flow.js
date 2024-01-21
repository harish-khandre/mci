const pacificAtlantic = (heights) => {
  // Check for empty input
  if (!heights || heights.length === 0 || heights[0].length === 0) {
    return [];
  }

  const rows = heights.length;
  const cols = heights[0].length;

  // Create matrices to track whether a cell is reachable from Pacific or Atlantic
  const pacific = Array.from(Array(rows), () => Array(cols).fill(false));
  const atlantic = Array.from(Array(rows), () => Array(cols).fill(false));

  // Define possible directions (up, down, left, right)
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // Depth-First Search function
  const dfs = (r, c, ocean) => {
    ocean[r][c] = true; // Mark the current cell as reachable

    // Explore neighbors in all directions
    for (const [dr, dc] of directions) {
      const newRow = r + dr;
      const newCol = c + dc;

      // Check if the neighbor is within bounds and can be reached
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !ocean[newRow][newCol] &&
        heights[newRow][newCol] >= heights[r][c]
      ) {
        dfs(newRow, newCol, ocean); // Recursively explore the neighbor
      }
    }
  };

  // Explore the left and right borders for Pacific and Atlantic
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific);
    dfs(r, cols - 1, atlantic);
  }

  // Explore the top and bottom borders for Pacific and Atlantic
  for (let c = 0; c < cols; c++) {
    dfs(0, c, pacific);
    dfs(rows - 1, c, atlantic);
  }

  // Collect cells that are reachable from both Pacific and Atlantic
  const result = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacific[r][c] && atlantic[r][c]) {
        result.push([r, c]);
      }
    }
  }

  return result;
};

// Example usage:
const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

const result = pacificAtlantic(heights);
console.log(result);
