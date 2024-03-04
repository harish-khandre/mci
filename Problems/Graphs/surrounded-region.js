// Function to solve the surrounded regions on a given board
const solve = (board) => {
  // Check if the board is empty
  if (board.length === 0) return null;

  // Traverse the border of the board and mark connected "O" regions
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // If the current cell is "O" and it is on the border, start DFS to mark connected "O" cells
      if (
        board[i][j] === "O" &&
        (i === 0 ||
          i === board.length - 1 ||
          j === 0 ||
          j === board[0].length - 1)
      ) {
        dfs(board, i, j);
      }
    }
  }

  // Modify the board based on the marked regions
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // If the cell was marked as "W," keep it as "O"; otherwise, set it to "X"
      if (board[i][j] === "W") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }

  return board;
};

// Depth First Search (DFS) to mark connected "O" regions as "W"
function dfs(board, i, j) {
  // Base cases for DFS termination
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    board[i][j] === "X" ||
    board[i][j] === "W"
  ) {
    return;
  }

  // Mark the current cell as "W"
  board[i][j] = "W";

  // Explore adjacent cells in all four directions
  dfs(board, i + 1, j);
  dfs(board, i - 1, j);
  dfs(board, i, j + 1);
  dfs(board, i, j - 1);

  return;
}
