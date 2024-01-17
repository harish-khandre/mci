const combinationSum = (candidates, target) => {
  // This array will store the result combinations
  const result = [];

  // DFS function to explore combinations
  function dfs(index, currentVal, arr) {
    // If the current value is negative, stop exploring this path
    if (currentVal < 0) {
      return;
    }

    // If the current value is zero, a valid combination is found, add it to the result
    if (currentVal === 0) {
      result.push([...arr]);
    }

    // Iterate through candidates starting from the given index
    for (let i = index; i < candidates.length; i++) {
      // Include the current candidate in the combination
      arr.push(candidates[i]);

      // Recursively explore combinations with the current candidate
      dfs(i, currentVal - candidates[i], arr);

      // Backtrack: Remove the last candidate to try other combinations
      arr.pop();
    }
  }

  // Start the DFS from the beginning (index 0), with the target value, and an empty array
  dfs(0, target, []);

  // Return the final result containing all valid combinations
  return result;
};
