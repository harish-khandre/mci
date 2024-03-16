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

// top down - memoization

var _change = (
  amount,
  coins,
  n = coins.length,
  memo = initMemo(coins, amount),
) => {
  const isBaseCase1 = n === 0;
  if (isBaseCase1) return 0;

  const isBaseCase2 = amount === 0;
  if (isBaseCase2) return 1;

  const hasSeen = memo[n][amount] !== null;
  if (hasSeen) return memo[n][amount];

  return dfs(
    amount,
    coins,
    n,
    memo,
  ); /* Time O(N * AMOUNT) | Space O((N * AMOUNT) + HEIGHT) */
};

var initMemo = (coins, amount) =>
  new Array(coins.length + 2)
    .fill()
    .map(() => new Array(amount + 2).fill(null));

var dfs = (amount, coins, n, memo) => {
  const isLess = amount < coins[n - 1];
  if (isLess) {
    memo[n][amount] = change(
      amount,
      coins,
      n - 1,
      memo,
    ); /* Time O(N * AMOUNT) | Space O(HEIGHT) */
    return memo[n][amount];
  }

  const left = change(
    amount - coins[n - 1],
    coins,
    n,
    memo,
  ); /* Time O(N * AMOUNT) | Space O(HEIGHT) */
  const right = change(
    amount,
    coins,
    n - 1,
    memo,
  ); /* Time O(N * AMOUNT) | Space O(HEIGHT) */

  memo[n][amount] = left + right; /*                    | Space O(N * AMOUNT) */
  return memo[n][amount];
};
