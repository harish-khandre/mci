const numIslands = (grid) => {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        explore(row, col, grid);
      }
    }
  }
  return count;
};

function explore(row, col, grid) {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[row].length ||
    grid[row][col] === "0"
  ) {
    return;
  }
  grid[row][col] = "0";
  explore(row, col + 1, grid);
  explore(row, col - 1, grid);
  explore(row + 1, col, grid);
  explore(row - 1, col, grid);
}
