const checkInclusion = (s1, s2) => {
  const s1len = s1.length;
  const s2len = s2.length;

  if (s1len > s2len) return false;

  const mem = new Array(26).fill(0);
  const aco = "a".charCodeAt(0);

  for (let i = 0; i < s1len; i++) {
    mem[s1.charCodeAt(i) - aco]++;
  }

  for (let l = 0, r = 0; r < s2len; r++) {
    if (r >= s1len) {
      const lco = s2.charCodeAt(l) - aco;
      mem[lco]++;
      l++;
    }

    const rco = s2.charCodeAt(r) - aco;
    mem[rco]--;

    if (!mem.some((a) => a !== 0)) return true;
  }

  return false;
};
