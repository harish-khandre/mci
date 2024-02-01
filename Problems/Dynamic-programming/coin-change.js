const coinChange = (coins, amount) => {
  let dp = Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let curAmount = 1; curAmount <= amount; curAmount++) {
    for (let coin of coins) {
      if (curAmount - coin >= 0) {
        dp[curAmount] = Math.min(dp[curAmount], dp[curAmount - coin] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
