const wordPattern = (pattern, s) => {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  const map = {};
  const set = new Set();
  for (let i = 0; i < pattern.length; i++) {
    if (!map[pattern[i]]) {
      if (set.has(words[i])) return false;
      map[pattern[i]] = words[i];
      set.add(words[i]);
    } else {
      if (map[pattern[i]] !== words[i]) return false;
    }
  }
  return true;
};
