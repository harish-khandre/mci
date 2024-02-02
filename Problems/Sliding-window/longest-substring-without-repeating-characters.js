const lengthOfLongestSubstring = (s) => {
  const set = new Set();
  let previous = 0;
  let max = 0;

  for (let current = 0; current < s.length; current++) {
    const c = s[current];
    while (set.has(c)) {
      set.delete(s[previous]);
      previous++;
    }
    set.add(c);
    max = Math.max(max, current - previous + 1);
  }
  return max;
};
