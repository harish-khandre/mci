const numDecodings = (s) => {
  // Initialize an array to store the number of ways to decode substrings.
  const dp = new Array(s.length + 1).fill(0);

  // Base case: there is only one way to decode an empty string.
  dp[s.length] = 1;

  // Iterate through the string from right to left.
  for (let i = s.length - 1; i >= 0; i--) {
    // If the current digit is '0', skip it (cannot be decoded alone).
    if (s[i] === "0") continue;

    // Count the number of ways to decode the substring starting from the current digit.
    dp[i] = dp[i + 1];

    // Check if the current digit and the next digit can be combined (<= 26).
    if (i < s.length - 1 && parseInt(s[i] + s[i + 1]) <= 26) {
      // Add the number of ways to decode the substring starting from the next digit.
      dp[i] += dp[i + 2];
    }
  }

  // The final answer is stored in dp[0].
  return dp[0];
};
