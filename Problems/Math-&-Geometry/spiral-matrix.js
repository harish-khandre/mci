var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  const result = [];
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse top row
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    // Traverse right column
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;

    // Ensure we haven't traversed the same row in the bottom
    if (top <= bottom) {
      // Traverse bottom row
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }

    // Ensure we haven't traversed the same column in the left
    if (left <= right) {
      // Traverse left column
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }

  return result;
};
