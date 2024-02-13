// Function to calculate the minimum number of coins needed to make up a given amount using dynamic programming
const coinChange = (coins, amount) => {
  // Initialize an array 'dp' to store the minimum number of coins needed for each amount from 0 to 'amount'
  let dp = Array(amount + 1).fill(Infinity);
  // Base case: 0 coins are needed to make amount 0
  dp[0] = 0;
  // Sort the coins array
  coins.sort((a, b) => a - b);
  // Iterate through each amount from 1 to 'amount'
  for (let curAmount = 1; curAmount <= amount; curAmount++) {
    // Iterate through each coin denomination
    for (let coin of coins) {
      // Check if the current coin can contribute to the current amount
      if (curAmount - coin >= 0) {
        // Update dp[curAmount] with the minimum number of coins needed
        dp[curAmount] = Math.min(dp[curAmount], dp[curAmount - coin] + 1);
      }
    }
  }
  // If dp[amount] is still set to Infinity, it means the amount cannot be made with the given coins
  // Otherwise, return the minimum number of coins needed to make up the amount
  return dp[amount] > amount ? -1 : dp[amount];
};
