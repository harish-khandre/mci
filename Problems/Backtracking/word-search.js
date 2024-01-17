const exist = (board, word) => {
  // Get the dimensions of the board
  const m = board.length;
  const n = board[0].length;

  // Helper function to perform DFS search for the word
  const check = (row, col, index) => {
    // If the entire word is found, return true
    if (index === word.length) return true;

    // Check if the current cell is out of bounds or has a different character
    if (
      row < 0 ||
      col < 0 ||
      row >= m ||
      col >= n ||
      board[row][col] !== word[index]
    )
      return false;

    // Mark the current cell as visited
    const originalChar = board[row][col];
    board[row][col] = "*";

    // Recursively check neighboring cells
    const result =
      check(row + 1, col, index + 1) ||
      check(row - 1, col, index + 1) ||
      check(row, col + 1, index + 1) ||
      check(row, col - 1, index + 1);

    // Revert the current cell back to its original state
    board[row][col] = originalChar;

    return result;
  };

  // Iterate through each cell in the board
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // If the word is found starting from the current cell, return true
      if (check(row, col, 0)) return true;
    }
  }

  // If the word is not found in any starting cell, return false
  return false;
};
