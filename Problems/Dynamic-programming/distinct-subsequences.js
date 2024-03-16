// This function calculates the number of distinct subsequences of string 's' that are equal to string 't'
var numDistinct = (s, t, i = 0, j = 0, memo = initMemo(s, t)) => {
  // Base case 1: If the length of 's' is less than the length of 't', there can be no subsequence of 's' equal to 't'
  const isBaseCase1 = s.length < t.length;
  if (isBaseCase1) return 0;

  // Base case 2: If we have reached the end of string 't', it means we have found a subsequence of 's' equal to 't'
  const isBaseCase2 = j === t.length;
  if (isBaseCase2) return 1;

  // Base case 3: If we have reached the end of string 's' but not the end of string 't', it means we cannot find a subsequence of 's' equal to 't'
  const isBaseCase3 = i === s.length;
  if (isBaseCase3) return 0;

  // Check if we have already computed and stored the result for the current indices 'i' and 'j'
  const hasSeen = memo[i][j] !== null;
  if (hasSeen) return memo[i][j];

  // If we haven't computed the result yet, call the 'dfs' function to compute it
  return dfs(s, t, i, j, memo);

  /* Time Complexity: O(N * M) | Space Complexity: O((N * M) + HEIGHT) */
};

// This function initializes a 2D array (memo) to store computed results for different indices
var initMemo = (s, t) =>
  new Array(s.length).fill().map(() => new Array(t.length).fill(null));

// This is a depth-first search (DFS) function that computes the number of distinct subsequences
var dfs = (s, t, i, j, memo) => {
  // Compute the number of distinct subsequences by skipping the current character in 's'
  const left = numDistinct(
    s,
    t,
    i + 1,
    j,
    memo,
  ); /* Time: O(N * M) | Space: O(HEIGHT) */

  // Check if the current characters in 's' and 't' are equal
  const isEqual = s[i] === t[j];

  // If the characters are equal, compute the number of distinct subsequences by including the current character
  const right = isEqual
    ? numDistinct(
        s,
        t,
        i + 1,
        j + 1,
        memo,
      ) /* Time: O(N * M) | Space: O(HEIGHT) */
    : 0;

  // Store the result in the memo and return it
  memo[i][j] = left + right; /* Space: O(N * M) */
  return memo[i][j];
};
