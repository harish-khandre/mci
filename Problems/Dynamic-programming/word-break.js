var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < s.length + 1; i++) {
    if (dp[i] === true) {
      for (let j = i + 1; j < s.length + 1; j++) {
        let currentFragment = s.slice(i, j);
        if (wordDict.includes(currentFragment)) {
          dp[j] = true;
        }
      }
    }
  }

  return dp[s.length];
};
