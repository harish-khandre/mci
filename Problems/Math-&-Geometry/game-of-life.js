const gameOfLife = (board) => {
  // Determine the dimensions of the board
  const rows = board.length;
  const cols = board[0].length;

  // Define the 8 possible directions (relative positions) to check for neighbors
  const directions = [
    [-1, -1], // Top left
    [-1, 0], // Top
    [-1, 1], // Top right
    [0, -1], // Left
    [0, 1], // Right
    [1, -1], // Bottom left
    [1, 0], // Bottom
    [1, 1], // Bottom right
  ];

  // Function to count live neighbors around a given cell
  const countLiveNeighbors = (row, col) => {
    let count = 0;
    // Iterate over each direction to check for neighbors
    for (let [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      // Check if the new position is within the bounds of the board
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        // Count the neighbor if it's live (value 1) or will die (value 2)
        count +=
          board[newRow][newCol] === 1 || board[newRow][newCol] === 2 ? 1 : 0;
      }
    }
    return count;
  };

  // First pass: Apply rules to mark cells for changes
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Count the number of live neighbors around the current cell
      const liveNeighbors = countLiveNeighbors(row, col);

      // Rule 1 & 3: Any live cell with fewer than 2 or more than 3 live neighbors will die (set to 2)
      if (board[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[row][col] = 2;
      }
      // Rule 4: Any dead cell with exactly 3 live neighbors will become live (set to 3)
      else if (board[row][col] === 0 && liveNeighbors === 3) {
        board[row][col] = 3;
      }
    }
  }

  // Second pass: Apply the marked changes to the board
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Change cells marked as dead (value 2) to dead (value 0)
      board[row][col] = board[row][col] === 2 ? 0 : board[row][col];
      // Change cells marked as live (value 3) to live (value 1)
      board[row][col] = board[row][col] === 3 ? 1 : board[row][col];
    }
  }
};
