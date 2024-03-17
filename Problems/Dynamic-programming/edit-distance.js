var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  // Create a 2D array dp with dimensions 2 x (n+1)
  const dp = Array.from({ length: 2 }, () => Array(n + 1).fill(0));

  // Iterate through word1
  for (let i = 0; i <= m; i++) {
    // Iterate through word2
    for (let j = 0; j <= n; j++) {
      // Base case: if either string is empty, the edit distance is the length of the other string
      if (i === 0 || j === 0) {
        dp[i % 2][j] = i + j;
      }
      // If the characters at the current positions in word1 and word2 are the same
      else if (word1[i - 1] === word2[j - 1]) {
        // No operation needed, so the edit distance is the same as the subproblem without these characters
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1];
      }
      // If the characters are different
      else {
        // Calculate the minimum edit distance by considering three operations:
        // 1. Deletion: dp[(i - 1) % 2][j]
        // 2. Insertion: dp[i % 2][j - 1]
        // 3. Substitution: dp[(i - 1) % 2][j - 1]
        // Add 1 to account for the operation itself
        dp[i % 2][j] =
          1 +
          Math.min(
            dp[(i - 1) % 2][j],
            dp[i % 2][j - 1],
            dp[(i - 1) % 2][j - 1],
          );
      }
    }
  }

  // The minimum edit distance is stored in dp[m % 2][n]
  return dp[m % 2][n];
};
