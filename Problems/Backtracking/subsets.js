const subsets = (nums) => {
  // Initialize the result array with an empty subset
  const result = [[]];

  // Depth-first search function to generate subsets
  function dfs(index, currentSubset) {
    // Explore all elements starting from the given index
    for (let i = index; i < nums.length; i++) {
      // Include the current element in the subset
      currentSubset.push(nums[i]);

      // Add the modified subset to the result array
      result.push(currentSubset.slice());

      // Recursively explore subsets with the current element included
      dfs(i + 1, currentSubset);

      // Backtrack: Remove the last element to explore other possibilities
      currentSubset.pop();
    }
  }

  // Start DFS from the beginning with an empty subset
  dfs(0, []);

  // Return the generated subsets
  return result;
};
