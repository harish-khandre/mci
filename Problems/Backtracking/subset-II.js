const subsetsWithDup = (nums) => {
  // Sort the input array to handle duplicates efficiently
  nums.sort((a, b) => a - b);

  // Output array to store the generated subsets
  const output = [];

  // Backtracking function to generate subsets
  function backtrack(currentSubset, startIndex) {
    // Add the current subset to the output array
    output.push([...currentSubset]);

    // Iterate through the array, starting from the given index
    for (let i = startIndex; i < nums.length; i++) {
      // Skip duplicates to avoid redundant subsets
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }

      // Explore the next element and generate subsets
      backtrack([...currentSubset, nums[i]], i + 1);
    }
  }

  // Start the backtracking process with an empty subset and index 0
  backtrack([], 0);

  // Return the final list of subsets
  return output;
};
