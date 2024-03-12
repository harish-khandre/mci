/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
  // Create a new array 'dp' of size 'amount + 1' and fill it with zeros
  const dp = new Array(amount + 1).fill(0);

  // There is one way to make change for amount 0 (by not using any coins)
  dp[0] = 1;

  // Iterate over each coin denomination
  for (const coin of coins) {
    // Iterate from the current coin denomination to the target amount
    for (let i = coin; i <= amount; i++) {
      // For each amount 'i', we can make change by either:
      // 1. Not using the current coin (dp[i] already has the count)
      // 2. Using the current coin and making change for the remaining amount (i - coin)
      // We add the number of ways to make change for 'i - coin' (dp[i - coin]) to dp[i]
      dp[i] += dp[i - coin];
    }
  }

  // dp[amount] will contain the total number of ways to make change for the given amount
  return dp[amount];
};
