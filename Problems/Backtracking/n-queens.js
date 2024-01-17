// Function to solve N-Queens problem
const solveNQueens = (n) => {
  // Arrays to track whether a column, positive diagonal, and negative diagonal are occupied
  const colSet = new Array(n).fill(false);
  const posDiagSet = new Array(2 * n - 1).fill(false);
  const negDiagSet = new Array(2 * n - 1).fill(false);

  // Initialize the chessboard with empty cells
  const board = new Array(n).fill().map(() => new Array(n).fill("."));

  // Start the depth-first search to find solutions
  return dfs(board, n, colSet, posDiagSet, negDiagSet);
};

// Depth-first search function
const dfs = (board, n, colSet, posDiagSet, negDiagSet, row = 0, moves = []) => {
  // If all rows are filled, add the current board configuration to the list of solutions
  if (row === n) {
    const rows = board.map((_row) => _row.join(""));
    moves.push(rows);
    return moves;
  }

  // Try placing a queen in each column of the current row
  for (let col = 0; col < n; col++) {
    // Calculate the indices for positive and negative diagonals
    const posDiagIndex = row + col;
    const negDiagIndex = row - col + n - 1;

    // Check if the current cell is not under attack
    if (
      !colSet[col] &&
      !posDiagSet[posDiagIndex] &&
      !negDiagSet[negDiagIndex]
    ) {
      // Mark the column, positive diagonal, and negative diagonal as occupied
      colSet[col] = true;
      posDiagSet[posDiagIndex] = true;
      negDiagSet[negDiagIndex] = true;
      // Place the queen in the current cell
      board[row][col] = "Q";

      // Recursively explore the next row
      dfs(board, n, colSet, posDiagSet, negDiagSet, row + 1, moves);

      // Backtrack: reset the states for the current cell
      colSet[col] = false;
      posDiagSet[posDiagIndex] = false;
      negDiagSet[negDiagIndex] = false;
      board[row][col] = ".";
    }
  }

  return moves;
};
