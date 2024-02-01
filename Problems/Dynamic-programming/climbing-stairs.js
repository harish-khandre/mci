// Function to calculate the number of ways to climb stairs
const climbStairs = (n) => {
  // Initialize an array to store the number of ways to climb each step
  let dp = [];

  // Base cases: there is 1 way to climb 1 step and 2 ways to climb 2 steps
  dp[1] = 1;
  dp[2] = 2;

  // Iterate from the 3rd step up to the given step 'n'
  for (let i = 3; i <= n; i++) {
    // The number of ways to climb the current step is the sum of ways to climb the previous two steps
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // The final result is the number of ways to climb the given step 'n'
  return dp[n];
};

// using memoization
const climbStairs2 = (n) => memoFunc(n, {});

const memoFunc = (n, memo) => {
  if (n in memo) return memo[n];
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;

  memo[n] = memoFunc(n - 1, memo) + memoFunc(n - 2, memo);
  return memo[n];
};
