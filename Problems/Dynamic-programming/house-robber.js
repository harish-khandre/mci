// Function to calculate the maximum amount of money that can be robbed
const rob = (nums) => {
  // If there are no houses, return 0
  if (nums.length === 0) {
    return 0;
  }
  // If there is only one house, return the money in that house
  if (nums.length === 1) {
    return nums[0];
  }

  // Create an array to store the maximum money that can be robbed at each house
  let dp = Array(nums.length + 1).fill(0);

  // Initialize the first two elements of dp array based on the first two houses
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // Iterate through the houses starting from the third house
  for (let i = 2; i < nums.length; i++) {
    // Calculate the maximum money that can be robbed at the current house
    // we are selecting dp[i] and escaping the non needed according to our conditions
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  // Return the maximum money that can be robbed from all the houses
  return dp[dp.length - 1];
};
