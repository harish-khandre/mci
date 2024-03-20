var rotate = function (matrix) {
  const n = matrix.length;

  // Iterate through each layer
  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    const first = layer; // Starting index of current layer
    const last = n - 1 - layer; // Ending index of current layer

    // Iterate through each element in the layer
    for (let i = first; i < last; i++) {
      const offset = i - first; // Calculate the offset from the first index

      // Store the value of the top element
      const top = matrix[first][i];

      // Left -> Top
      matrix[first][i] = matrix[last - offset][first];

      // Bottom -> Left
      matrix[last - offset][first] = matrix[last][last - offset];

      // Right -> Bottom
      matrix[last][last - offset] = matrix[i][last];

      // Top -> Right
      matrix[i][last] = top;
    }
  }
};
