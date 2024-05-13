/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition. */

const isValidSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const col = new Set();
    const box = new Set();

    for (let j = 0; j < 9; j++) {
      const _row = board[i][j];
      const _col = board[j][i];
      const _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (_row !== ".") {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col !== ".") {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box !== ".") {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true;
};
