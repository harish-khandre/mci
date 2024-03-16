const findTargetSumWays = (nums, target) => {
  const n = nums.length;
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  // Early return if the target is not possible
  if (Math.abs(target) > totalSum || (target + totalSum) % 2 !== 0) return 0;

  // Initialize a 1D DP array of size 2 * totalSum + 1
  const dp = new Array(2 * totalSum + 1).fill(0);
  dp[totalSum] = 1; // Base case: empty expression evaluates to 0

  for (let i = 1; i <= n; i++) {
    const num = nums[i - 1];
    // Create a temporary 1D array to store the updated values
    const temp = new Array(2 * totalSum + 1).fill(0);

    for (let sum = 0; sum <= 2 * totalSum; sum++) {
      // If there are ways to get the sum 'sum' using the first 'i - 1' elements
      const positive = dp[sum];
      if (positive > 0) {
        // Update temp[sum + num] with the number of ways to get 'sum + num'
        temp[sum + num] += positive;
        // Update temp[Math.abs(sum - num)] with the number of ways to get 'Math.abs(sum - num)'
        temp[Math.abs(sum - num)] += positive;
      }
    }

    // Assign the updated temp array to dp for the next iteration
    dp = temp;
  }

  // Return the number of ways to construct an expression that evaluates to the target
  return dp[totalSum + target];
};
