const longestCommonSubsequence = (text1, text2) => {
  const tabu = initTabu(text1, text2); /* Time O(N * M) | Space O(N * M) */

  search(text1, text2, tabu); /* Time O(N * M) | Space O(N * M) */

  return tabu[0][0];
};

var initTabu = (text1, text2) =>
  new Array(text1.length + 1)
    .fill() /* Time O(N) | Space O(N) */
    .map(() =>
      new Array(text2.length + 1).fill(0),
    ); /* Time O(M) | Space O(M) */

var search = (text1, text2, tabu) => {
  const [n, m] = [text1.length, text2.length];

  for (let x = n - 1; 0 <= x; x--) {
    /* Time O(N) */
    for (let y = m - 1; 0 <= y; y--) {
      /* Time O(M) */
      tabu[x][y] =
        text1[x] === text2[y] /* Space O(N * M) */
          ? tabu[x + 1][y + 1] + 1
          : Math.max(tabu[x + 1][y], tabu[x][y + 1]);
    }
  }
};
