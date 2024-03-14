// Function to determine if a string s3 is an interleaving of strings s1 and s2
const isInterleave = (s1, s2, s3) => {
  // Store lengths of the strings for efficiency
  const m = s1.length,
    n = s2.length,
    p = s3.length;

  // Base case: If lengths don't match, s3 cannot be an interleaving
  if (m + n !== p) return false;

  // Create a 2D boolean array dp for dynamic programming (DP)
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  // Empty strings are always interleaved
  dp[0][0] = true;

  // Fill the first row: Check if s3 can be formed by interleaving s1 and an empty s2
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  // Fill the first column: Check if s3 can be formed by interleaving s2 and an empty s1
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  // Fill the remaining cells using DP:
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // Calculate the corresponding index in s3 for current characters in s1 and s2
      const idx = i + j - 1;

      // Check if s3 can be formed by:
      // 1. Taking a character from s1 and appending the rest of s2 and s1
      // 2. Taking a character from s2 and appending the rest of s1 and s2
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[idx]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[idx]);
    }
  }

  // The final result in dp[m][n] indicates if s3 is a complete interleaving
  return dp[m][n];
};
