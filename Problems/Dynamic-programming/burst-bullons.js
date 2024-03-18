// Function to find the maximum coins that can be collected by bursting balloons
const maxCoins = (nums) => {
  // Create a new array with 1 at the start and end to handle edge cases
  let baloons = [1, ...nums, 1];

  // Create a 2D array to store the maximum coins that can be collected
  // for each subarray from index i to index j
  let dp = Array.from(Array(nums.length + 2), () =>
    Array(nums.length + 2).fill(0),
  );

  // Iterate over all possible subarrays from right to left
  for (let i = nums.length; i >= 1; i -= 1) {
    for (let j = 1; j <= nums.length; j += 1) {
      // Skip if i is greater than j (invalid subarray)
      if (i > j) {
        continue;
      }

      // Initialize the maximum coins for the current subarray
      let max = 0;

      // Iterate over all possible indices to burst the balloon
      for (let index = i; index <= j; index += 1) {
        // Calculate the maximum coins that can be collected by bursting the balloon at index
        // and adding the maximum coins from the left and right subarrays
        max = Math.max(
          max,
          baloons[i - 1] * baloons[index] * baloons[j + 1] +
            dp[i][index - 1] +
            dp[index + 1][j],
        );
      }

      // Store the maximum coins for the current subarray
      dp[i][j] = max;
    }
  }

  // Return the maximum coins that can be collected from the entire array
  return dp[1][nums.length];
};
