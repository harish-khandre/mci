var setZeroes = function (matrix) {
  const [rows, cols] = [matrix.length, matrix[0].length];
  let firstRowZero = false;
  let firstColZero = false;

  // Check if the first row needs to be zeroed
  for (let col = 0; col < cols; col++) {
    if (matrix[0][col] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // Check if the first column needs to be zeroed
  for (let row = 0; row < rows; row++) {
    if (matrix[row][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // Use the first row and first column to mark zero positions
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // Set zeroes based on marks in the first row and first column
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  // Zero out first row if needed
  if (firstRowZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }

  // Zero out first column if needed
  if (firstColZero) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }
};
