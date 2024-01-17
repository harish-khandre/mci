const combinationSum2 = (candidates, target) => {
  // Initialize an array to store the result combinations
  const res = [];

  // Sort the candidates array in ascending order
  candidates.sort((a, b) => a - b);

  // Define a recursive function to find combinations
  const dfs = (path, remainder, start) => {
    // If the remainder is 0, a combination is found
    if (remainder === 0) {
      // Clone the current path and add it to the result array
      res.push([...path]);
      return;
    }

    // Iterate over candidates starting from the specified index
    for (let i = start; i < candidates.length; i++) {
      // Skip duplicates to avoid duplicate combinations
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      // Skip if the current candidate makes the remainder negative
      if (remainder - candidates[i] < 0) break;

      // Include the current candidate in the path
      path.push(candidates[i]);

      // Recursively call dfs with the updated path and remainder
      // Move to the next candidate by incrementing the index
      dfs(path, remainder - candidates[i], i + 1);

      // Backtrack by removing the last added candidate
      path.pop();
    }
  };

  // Start the recursive search with an empty path, target, and index 0
  dfs([], target, 0);

  // Return the array of combinations
  return res;
};
