const searchMatrix = (matrix, target) => {
  // Extract the number of rows (m) and columns (n) in the matrix
  const [m, n] = [matrix.length, matrix[0].length];
  // Set the search space boundaries: [l, r] represents the range of indices to search
  let [l, r] = [0, m * n - 1];

  // Binary search loop
  while (l <= r) {
    // Calculate the middle index using bitwise right shift for faster integer division
    const mid = (l + r) >> 1;
    // Calculate the row and column indices of the middle element
    const midRow = Math.floor(mid / n);
    const midCol = mid % n;
    // Get the value of the middle element in the matrix
    const midEle = matrix[midRow][midCol];

    // Check if the middle element is the target
    if (midEle === target) {
      return true; // Target found
    }

    // If the middle element is greater than the target, adjust the search space to the left
    if (midEle > target) {
      r = mid - 1;
    } else {
      // If the middle element is less than the target, adjust the search space to the right
      l = mid + 1;
    }
  }

  // If the loop completes without finding the target, return false
  return false;
};
