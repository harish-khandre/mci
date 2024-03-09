const cache = new Map();

const uniquePaths = (m, n) => {
  const key = `${m}, ${n}`;

  if (m === 1 || n === 1) return 1;

  if (!cache[key]) {
    cache[key] = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  }

  return cache[key];
  //return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};
