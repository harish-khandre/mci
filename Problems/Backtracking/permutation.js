const permute = (nums) => {
  const result = [];

  // Start the permutation process with the initial state
  permuteHelper(nums, 0, result);

  return result;
};

function permuteHelper(nums, start, result) {
  // Base case: If start index reaches the end, a complete permutation is found
  if (start === nums.length) {
    // Push a copy of the current permutation into the result array
    result.push(nums.slice());
    return;
  }

  // Iterate through elements from the current start index to the end
  for (let i = start; i < nums.length; i++) {
    // Swap the current element with the element at index i
    swap(nums, start, i);

    // Recursively generate permutations for the remaining elements
    permuteHelper(nums, start + 1, result);

    // Backtrack: Undo the swap to explore other possibilities
    swap(nums, start, i);
  }
}

function swap(nums, i, j) {
  // Utility function to swap elements at indices i and j in the nums array
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
