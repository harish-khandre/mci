const fibonacciTopDown = () => {
  let cache = new Array();
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

// Example usage
/* const result = fibonacciTopDown(5);
console.log(result); // Output: 5; */

function fibonacciBottomUp(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Example usage
/* const result = fibonacciBottomUp(5);
console.log(result); // Output: 5 */
