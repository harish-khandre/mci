const groupAnagrams = (strs) => {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split("").sort().join("");
    if (map.has(key)) {
      // checks the anagram associated with that str as we sorted them earlier the and save in the map of that key
      map.get(key).push(strs[i]);
    } else {
      map.set(key, [strs[i]]);
    }
  }
  return Array.from(map.values());
};
